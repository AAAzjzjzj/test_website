# K均值算法

- k均值算法
- db-scan算法

## k均值算法

1. 从每个集群中选取 K 个数据点作为质心（centroids）。
2. 将每一个数据点与距离自己最近的质心划分在同一集群，即生成 K 个新集群。
3. 找出新集群的质心，这样就有了新的质心。
4. 重复 2 和 3，直到结果收敛，即不再有新的质心出现。

怎样确定 K 的值：

如果我们在每个集群中计算集群中所有点到质心的距离平方和，再将不同集群的距离平方和相加，我们就得到了这个集群方案的总平方和。

我们知道，随着集群数量的增加，总平方和会减少。但是如果用总平方和对 K 作图，你会发现在某个 K 值之前总平方和急速减少，但在这个 K 值之后减少的幅度大大降低，这个值就是最佳的集群数。

距离计算公式：

一维坐标系中,设 A(x1),B(x2),则 A,B 之间的距离为

∣𝐴𝐵∣=√[(𝑥1−𝑥2)2]     ∣*AB*∣=√[(*x*1−*x*2)2] 

二维坐标系中,设 A(x1,y1),B(x2,y2),则 A,B 之间的距离为

∣𝐴𝐵∣=√[(𝑥1−𝑥2)2+(𝑦1−𝑦2)2]       ∣*AB*∣=√[(*x*1−*x*2)2+(*y*1−*y*2)2]

三维坐标系中,设 A(x1,y1,z1),B(x2,y2,z2),则 A,B 之间的距离为

∣𝐴𝐵∣=√[(𝑥1−𝑥2)2+(𝑦1−𝑦2)2+(𝑧1−𝑧2)2]∣*AB*∣=√[(*x*1−*x*2)2+(*y*1−*y*2)2+(*z*1−*z*2)2]

以此类推

```python
#简单示例
# 导入必要的库
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import load_iris
# 加载数据
iris = load_iris()
iris_X = iris.data
iris_y = iris.target

# 创建K均值模型
kmeans = KMeans(n_clusters=3,random_state=0)
# 拟合模型，注意看这是无监督学习，这里只填写了数据集，没有给标签。
kmeans.fit(iris_X)

# 获取簇中心和簇标签
centers = kmeans.cluster_centers_
labels = kmeans.labels_
print(iris_y)
print(iris_X[:,0])
print(labels)
plt.scatter(iris_X[:,0],iris_X[:,1],c=labels,marker="H")
plt.scatter(centers[:,0],centers[:,1],c="red",marker="2")
plt.title("Kmeans")
plt.show()

plt.scatter(iris_X[:,2],iris_X[:,3],c=labels,marker="H")
plt.scatter(centers[:,2],centers[:,3],c="red",marker="2")
plt.show()
```

## 简单示例

```python
# 导入必要的库
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import load_iris
# 加载数据
iris = load_iris()
iris_X = iris.data
iris_y = iris.target

# 创建K均值模型
kmeans = KMeans(n_clusters=3)
# 拟合模型，注意看这是无监督学习，这里只填写了数据集，没有给标签。
kmeans.fit(iris_X)

# 获取簇中心和簇标签
centers = kmeans.cluster_centers_
labels = kmeans.labels_
print(iris_y)
print(labels)

# 我们发现他把0、1、2分类成了1、0、2，这是因为K均值算法是无监督学习，他不知道我们的标签是什么，所以他自己给我们分了一套标签
```

## 效果

```python
# 使用列表推导式将0、1、2转换成1、0、2
exchange={0:1,1:0,2:2}
exchange_labels = [exchange[i] if i in exchange else i for i in labels]

right = 0
error = 0
for i in zip(exchange_labels,iris_y):
    if i[0] == i[1]:
        right +=1
    else:
        error +=1

print('正确率：{}%'.format(right/(right+error)*100))
```

## db-scan算法

### 1.用于计算不规则图形的中心点

![K均值算法图1](/img/machine-learning/k均值算法图1.png)

计算出**每个点到距其第k近的点的距离**，然后将这些距离从大到小排序后进行绘图。
![K均值算法图2](/img/machine-learning/k均值算法图2.png)

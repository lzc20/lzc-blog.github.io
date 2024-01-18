---
order: 2
title: java基础(中)
---
# 01-02Java基础（中）

## 面向对象基础

观看Javaguid学习笔记这是。具体请去看： [JavaGuide（Java面试+学习指南）](https://javaguide.cn/)

在我这里我只选择我自己想要记录的记录下来

### 面向对象和面向过程的区别？

Java是一种面向对象的编程语言，与面向过程的编程方式有一些显著的区别。

1. 抽象级别不同：
   * 面向过程：关注解决问题的步骤和过程，将程序分解为一系列的函数或者过程。
   * 面向对象：关注问题中的实体及其相互之间的交互关系，将程序设计为一组对象的集合。
2. 对象的思维方式：
   * 面向过程：以功能为中心，按照步骤执行任务。
   * 面向对象：以对象为中心，通过对象之间的交互来完成任务。
3. 数据和方法的封装：
   * 面向过程：数据和方法是分开的，函数对数据进行操作。
   * 面向对象：将数据和方法封装在对象中，对象对自身的数据和方法进行管理和操作。
4. 继承与多态性：
   * 面向过程：没有继承和多态的概念。
   * 面向对象：通过继承和多态性实现代码的重用和灵活性。
5. 设计思想：
   * 面向过程：自顶向下、逐步求精的设计方式。
   * 面向对象：自底向上、从整体到部分的设计方式。

总体来说，面向对象的编程更加强调代码的可重用性、可扩展性和可维护性，通过封装、继承和多态等特性来实现。而面向过程的编程更加关注解决问题的步骤和过程，以函数或者过程为中心进行编程。在实际开发中，根据具体的需求和项目规模选择合适的编程方式是很重要的

### 创建一个对象用什么运算符?对象实体与对象引用有何不同?

new 运算符，new 创建对象实例（对象实例在堆内存中），对象引用指向对象实例（对象引用存放在栈内存中）。

- 一个对象引用可以指向 0 个或 1 个对象（一根绳子可以不系气球，也可以系一个气球）；
- 一个对象可以有 n 个引用指向它（可以用 n 条绳子系住一个气球）。

### 对象的相等和引用相等的区别

- 对象的相等一般比较的是内存中存放的内容是否相等。
- 引用相等一般比较的是他们指向的内存地址是否相等。

### 如果一个类没有声明构造方法，该程序能正确执行吗?

构造方法是一种特殊的方法，主要作用是完成对象的初始化工作。

如果一个类没有声明构造方法，也可以执行！因为一个类即使没有声明构造方法也会有默认的不带参数的构造方法。如果我们自己添加了类的构造方法（无论是否有参），Java 就不会添加默认的无参数的构造方法了。

我们一直在不知不觉地使用构造方法，这也是为什么我们在创建对象的时候后面要加一个括号（因为要调用无参的构造方法）。如果我们重载了有参的构造方法，记得都要把无参的构造方法也写出来（无论是否用到），因为这可以帮助我们在创建对象的时候少踩坑。

### 构造方法有哪些特点？是否可被 override?

构造方法特点如下：

- 名字与类名相同。
- 没有返回值，但不能用 void 声明构造函数。
- 生成类的对象时自动执行，无需调用。

构造方法不能被 override（重写）,但是可以 overload（重载）,所以你可以看到一个类中有多个构造函数的情况。

### 面向对象三大特征?

封装：把一个些属性特征搞成一个对象。

继承：继承家业，但是爸爸的女人你不能有这是私人的。只能继承公共的，并且可以扩大家业，也可用自己的方式来实现父类的方法

多态：一个对象具有多种状态，具体表现为父类的引用指向子类的实例

- 对象类型和引用类型之间具有继承（类）/实现（接口）的关系；
- 引用类型变量发出的方法调用的到底是哪个类中的方法，必须在程序运行期间才能确定；

- 多态不能调用“只在子类存在但在父类不存在”的方法；

- 如果子类重写了父类的方法，真正执行的是子类覆盖的方法，如果子类没有覆盖父类的方法，执行的是父类的方法

### 接口和抽象类有什么共同点和区别？

共同点：

- 都不能实列化
- 都可以包含抽象方法
- 都有默认的实现方法

区别：

- 接口主要对于类的行为进行约束，你实现了某个接口就具有对应的行为，抽象类主要用于代码服用，强调的所属关系，
- 一个类只能继承一个类，但是可以实现多个接口
- 接口中的成员变量只能  `public static final` 类型的，不能被修改且必须有初始值，而抽象类的成员变量默认default，可在子类中被重新定义，也可被重新赋值。

### 深拷贝和浅拷贝了解么？什么是引用拷贝》

guide哥说：

- **浅拷贝**：浅拷贝会在堆上创建一个新的对象（区别与引用拷贝），不过，如果原对象内部的属性是引用类型的话，浅拷贝会直接复制内部对象的引用地址，也就是说拷贝对象和原对象共用一个内部对象。

- **深拷贝** ：深拷贝是完全复制整个对象包含内部对象。就说都是自己的

![浅拷贝、深拷贝、引用拷贝示意图](02-Java基础部分(中).assets/shallow&deep-copy.png)

**那什么是引用拷贝呢？** 简单来说，引用拷贝就是两个不同的引用指向同一个对象。

## Object

### Object类常见的方法有哪些？

Object是一个特殊的类是所有类的父类。它主要提供了以下11哥方法

```java 
/**
 * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
 */
public final native Class<?> getClass()
/**
 * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
 */
public native int hashCode()
/**
 * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
 */
public boolean equals(Object obj)
/**
 * native 方法，用于创建并返回当前对象的一份拷贝。
 */
protected native Object clone() throws CloneNotSupportedException
/**
 * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
 */
public String toString()
/**
 * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
 */
public final native void notify()
/**
 * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
 */
public final native void notifyAll()
/**
 * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
 */
public final native void wait(long timeout) throws InterruptedException
/**
 * 多了 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 纳秒。。
 */
public final void wait(long timeout, int nanos) throws InterruptedException
/**
 * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
 */
public final void wait() throws InterruptedException
/**
 * 实例被垃圾回收器回收的时候触发的操作
 */
protected void finalize() throws Throwable { }

```

### ==与equals()的区别

一个比较的是地址，一个比较的是内容，基本类型和引用类型来说明

String中的`equals`方法是被重写过的因为`Object`的`euqals()`方法是比较对象的内存地址，而`String`的`equals`方法是比较的对象的值。

当创建`String`类型的对象时候，虚拟机会在常量池中找有没有以及村子啊的值和要创建的值相同的对象，如果有就会把他赋给当前引用，如果没有就在常量池中创建一个/string对象。



~~~java
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String anotherString = (String)anObject;
        int n = value.length;
        if (n == anotherString.value.length) {
            char v1[] = value;
            char v2[] = anotherString.value;
            int i = 0;
            while (n-- != 0) {
                if (v1[i] != v2[i])
                    return false;
                i++;
            }
            return true;
        }
    }
    return false;
}

~~~

### HashCode()有什么用呢？

hashCode的作用是获取哈希码（int整数），也称之为散列码。这个哈希码作用是确定对象在哈希表中的索引位置。

![hashCode(02-Java基础部分(中).assets/java-hashcode-method.png) 方法](https://oss.javaguide.cn/github/javaguide/java/basis/java-hashcode-method.png)



hashCode（）定义在JDK的Object类中，这就意味着Java中的任务类都包含HashCode这个函数。另外需要注意的是，hashCode方法是本地方法，就是用C语言或者C++来实现的。

~~~Java
public native int hashCode();
~~~

散列表存储的键值怼（Key-value），他的特点是：能够根据建快速检索出对应的值，这其中就利用了散列码。

### 为什么要有HashCode？

hashSet如何检查重复的？ guide哥用这个例子来告诉我们

他说他看了一本Java的启蒙书籍《HeadFirst Java》：

当你把对象加入`HashSet`时,`HashSet` 会先计算对象的`hashCode`值来判断对象加入的位置，同事也会与其他已经加入的对象的`HashCode`值来做比较，如果没有相符的hashCode，HashCode会假设对象没有重复出现。但是如果发现有相同的hashCode，HashSet会假设对象没有重复出现，但是如果有发现相同的hashCode值对象这时，会调用equals（）方法来检查hashCode相等的对象是否真的相同，如果俩者相同，HashSet就不会让其加入操作成功，如果不同的话，就会重新散列到其他位置，这样我们就大大减少了equals的次数，相应就大大提高了执行速度，。

hashCode和equals都是用于比较俩对象是否相等。

**那为什么JDK还要同事提供这俩方法呢**

这是因为在一些容器（比如 `HashMap`、`HashSet`）中，有了 `hashCode()` 之后，判断元素是否在对应容器中的效率会更高（参考添加元素进`HashSet`的过程）！

我们在前面也提到了添加元素进`HashSet`的过程，如果 `HashSet` 在对比的时候，同样的 `hashCode` 有多个对象，它会继续使用 `equals()` 来判断是否真的相同。也就是说 `hashCode` 帮助我们大大缩小了查找成本。

**那为什么不只提供 hashCode() 方法呢？**

这是因为两个对象的`hashCode` 值相等并不代表两个对象就相等。

**那为什么两个对象有相同的 hashCode 值，它们也不一定是相等的？**

因为 `hashCode()` 所使用的哈希算法也许刚好会让多个对象传回相同的哈希值。越糟糕的哈希算法越容易碰撞，但这也与数据值域分布的特性有关（所谓哈希碰撞也就是指的是不同的对象得到相同的 `hashCode` )。

总结下来就是：

- 如果两个对象的`hashCode` 值相等，那这两个对象不一定相等（哈希碰撞）。
- 如果两个对象的`hashCode` 值相等并且`equals()`方法也返回 `true`，我们才认为这两个对象相等。
- 如果两个对象的`hashCode` 值不相等，我们就可以直接认为这两个对象不相等。

相信大家看了我前面对 `hashCode()` 和 `equals()` 的介绍之后，下面这个问题已经难不倒你们了。

### 为什么重写equals时候必须重写hashCode（）方法？

### 为什么重写 equals() 时必须重写 hashCode() 方法？

因为两个相等的对象的 `hashCode` 值必须是相等。也就是说如果 `equals` 方法判断两个对象是相等的，那这两个对象的 `hashCode` 值也要相等。

如果重写 `equals()` 时没有重写 `hashCode()` 方法的话就可能会导致 `equals` 方法判断是相等的两个对象，`hashCode` 值却不相等。

**思考**：重写 `equals()` 时没有重写 `hashCode()` 方法的话，使用 `HashMap` 可能会出现什么问题。

**总结**：

- `equals` 方法判断两个对象是相等的，那这两个对象的 `hashCode` 值也要相等。
- 两个对象有相同的 `hashCode` 值，他们也不一定是相等的（哈希碰撞）

## String(字符串)

### String、StringBuffer、StringBuilder 的区别？

**可变性**

`String` 是不可变的（后面会详细分析原因）。

`StringBuilder` 与 `StringBuffer` 都继承自 `AbstractStringBuilder` 类，在 `AbstractStringBuilder` 中也是使用字符数组保存字符串，不过没有使用 `final` 和 `private` 关键字修饰，最关键的是这个 `AbstractStringBuilder` 类还提供了很多修改字符串的方法比如 `append` 方法。

~~~java 
abstract class AbstractStringBuilder implements Appendable, CharSequence {
    char[] value;
    public AbstractStringBuilder append(String str) {
        if (str == null)
            return appendNull();
        int len = str.length();
        ensureCapacityInternal(count + len);
        str.getChars(0, len, value, count);
        count += len;
        return this;
    }
    //...
}

~~~

### String 为什么是不可变的?

`String` 类中使用 `final` 关键字修饰字符数组来保存字符串，所以`String` 对象是不可变的。

```java
public final class String implements java.io.Serializable, Comparable<String>, CharSequence {
    private final char value[];
  //...
}
```









> 🐛 修正：我们知道被 `final` 关键字修饰的类不能被继承，修饰的方法不能被重写，修饰的变量是基本数据类型则值不能改变，修饰的变量是引用类型则不能再指向其他对象。因此，`final` 关键字修饰的数组保存字符串并不是 `String` 不可变的根本原因，因为这个数组保存的字符串是可变的（`final` 修饰引用类型变量的情况）。
>
> `String` 真正不可变有下面几点原因：
>
> 1. 保存字符串的数组被 `final` 修饰且为私有的，并且`String` 类没有提供/暴露修改这个字符串的方法。
> 2. `String` 类被 `final` 修饰导致其不能被继承，进而避免了子类破坏 `String` 不可变。
>
> 相关阅读：[如何理解 String 类型值的不可变？ - 知乎提问open in new window](https://www.zhihu.com/question/20618891/answer/114125846)
>
> 补充（来自[issue 675open in new window](https://github.com/Snailclimb/JavaGuide/issues/675)）：在 Java 9 之后，`String`、`StringBuilder` 与 `StringBuffer` 的实现改用 `byte` 数组存储字符串。
>
> ```java
> public final class String implements java.io.Serializable,Comparable<String>, CharSequence {
>     // @Stable 注解表示变量最多被修改一次，称为“稳定的”。
>     @Stable
>     private final byte[] value;
> }
> 
> abstract class AbstractStringBuilder implements Appendable, CharSequence {
>     byte[] value;
> 
> }
> 
> ```

------

**Java 9 为何要将 String 的底层实现由 char[] 改成了 byte[] ?**

新版的 String 其实支持两个编码方案：Latin-1 和 UTF-16。如果字符串中包含的汉字没有超过 Latin-1 可表示范围内的字符，那就会使用 Latin-1 作为编码方案。Latin-1 编码方案下，`byte` 占一个字节(8 位)，`char` 占用 2 个字节（16），`byte` 相较 `char` 节省一半的内存空间。

JDK 官方就说了绝大部分字符串对象只包含 Latin-1 可表示的字符。

### 字符串拼接用“+” 还是 StringBuilder?

字符串对象通过“+”的字符串拼接方式，实际上是通过 `StringBuilder` 调用 `append()` 方法实现的，拼接完成之后调用 `toString()` 得到一个 `String` 对象 。

在循环内使用“+”进行字符串的拼接的话，存在比较明显的缺陷：**编译器不会创建单个 StringBuilder 以复用，会导致创建过多的 StringBuilder 对象**。

使用 “+” 进行字符串拼接会产生大量的临时对象的问题在 JDK9 中得到了解决。在 JDK9 当中，字符串相加 “+” 改为了用动态方法 

makeConcatWithConstants()来实现，而不是大量的 StringBuilder了。这个改进是 JDK9 的 

 提出的，这也意味着 JDK 9 之后，你可以放心使用“+” 进行字符串拼接使用。 

### 字符串常量池的作用了解吗？

**字符串常量池** 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。

```java
// 在堆中创建字符串对象”ab“
// 将字符串对象”ab“的引用保存在字符串常量池中
String aa = "ab";
// 直接返回字符串常量池中字符串对象”ab“的引用
String bb = "ab";
System.out.println(aa==bb);// true
```





------

著作权归JavaGuide(javaguide.cn)所有 基于MIT协议 原文链接：https://javaguide.cn/java/basis/java-basic-questions-02.html
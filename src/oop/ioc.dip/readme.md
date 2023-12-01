IoC and DIP

- IoC – Inversion of Control (Principle) (aka Hollywood Principle)
- DIP – Dependency Inversion Principle (from SOLID)
- DI – Dependency Injection (Pattern)
- IoC Container (a.k.a. DI Container) - DI Framework

10 Best JavaScript Dependency Injection Libraries:  
https://openbase.com/categories/js/best-javascript-dependency-injection-libraries

https://stackoverflow.com/questions/6550700/inversion-of-control-vs-dependency-injection  
https://www.tutorialsteacher.com/ioc/introduction  
http://sergeyteplyakov.blogspot.com/2014/11/di-vs-dip-vs-ioc.html  
https://habr.com/ru/post/131993/

About all:

https://viktor-kukurba.medium.com/dependency-injection-and-inversion-of-control-in-javascript-303e07e7f43f

**_ Inversion of Control (IoC) Principle _**

https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F_%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F

Inversion of Control (IoC) is a design principle (although, some people refer to it as a pattern). As the name suggests, it is used to invert different kinds of controls in object-oriented design to achieve loose coupling. **_ Here, controls refer to any additional responsibilities a class has, other than its main responsibility. This include control over the flow of an application, and control over the flow of an object creation or dependent object creation and binding. _**

IoC is all about inverting the control. To explain this in layman's terms, suppose you drive a car to your work place. This means you control the car. The IoC principle suggests to invert the control, meaning that instead of driving the car yourself, you hire a cab, where another person will drive the car. Thus, this is called inversion of the control - from you to the cab driver. You don't have to drive a car yourself and you can let the driver do the driving so that you can focus on your main work.

The IoC principle helps in designing loosely coupled classes which make them testable, maintainable and extensible.

Source: https://www.tutorialsteacher.com/ioc/inversion-of-control

**_ Dependency Inversion Principle (DIP) _**

1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend on details. Details should depend on abstractions.

An important detail of this definition is, that high-level and low-level modules depend on the abstraction. The design principle does not just change the direction of the dependency, as you might have expected when you read its name for the first time. It splits the dependency between the high-level and low-level modules by introducing an abstraction between them. So in the end, you get two dependencies:

1. the high-level module depends on the abstraction, and
2. the low-level depends on the same abstraction.

In English, abstraction means something which is non-concrete. In programming terms, the abstraction means to create an interface or an abstract class which is non-concrete. This means we cannot create an object of an interface or an abstract class. As per DIP, a high-level module should not depend on the concrete a low-level module. Both modules/classes should depend on abstractions, meaning both classes should depend on an interface or an abstract class.

**_ Dependency Injection (DI) pattern _**

Types of Dependency Injection:

- Constructor Injection: In the constructor injection, the injector supplies the service (dependency)
  through the client class constructor.

- Property Injection: In the property injection (aka the Setter Injection), the injector supplies the
  dependency through a public property of the client class.

- Method Injection: In this type of injection, the client class implements an interface which declares
  the method(s) to supply the dependency and the injector uses this interface to supply the dependency
  to the client class.

Source: https://www.tutorialsteacher.com/ioc/dependency-injection

Still, we have not achieved fully loosely coupled classes because the CustomerBusinessLogic class includes a factory class to get the reference of ICustomerDataAccess. This is where the DEPENDENCY INJECTION PATTERN helps us. In the next chapter, we will learn how to use the Dependency Injection (DI) and the Strategy pattern using the above example.

- Dependency Injection is an implementation of Dependency Inversion Principle.
- One of the ways to achieve Open-Close Principle is to use Dependency Inversion Principle.
- High-level modules in DIP are modules that appear on the higher part of the UML diagram and depends on the abstraction layer. Abstractions are the ones in the center of the diagram. Low-level modules are the ones in the lower level of the diagram and are the actual implementations of the abstraction layer.

It makes the code less coupled and unit testable
https://alexnault.dev/dependency-inversion-principle-in-functional-typescript

**_ IoC Container (a.k.a. DI Container) framework _**

It is a framework for implementing automatic dependency injection. It manages object creation and it's life-time, and also injects dependencies to the class.

All the containers must provide easy support for the following DI lifecycle:

- Register: The container must know which dependency to instantiate when it encounters a particular type.
  This process is called registration. Basically, it must include some way to register type-mapping.

- Resolve: When using the IoC container, we don't need to create objects manually. The container does it
  for us. This is called resolution. The container must include some methods to resolve the specified type; the container creates an object of the specified type, injects the required dependencies if any and returns the object.

- Dispose: The container must manage the lifetime of the dependent objects. Most IoC containers include
  different lifetimemanagers to manage an object's lifecycle and dispose it.

Source: https://www.tutorialsteacher.com/ioc/ioc-container

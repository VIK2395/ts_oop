GRASP (General Responsibility Assignment Software Patterns) (1997)  
**_ Craig Larman. Book:: Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and Iterative Development. 1997. _**  
https://bool.dev/blog/detail/grasp-printsipy  
https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)

Существует девять GRAPS шаблонов, изначально описанных в книге Крейга Лармана «Применение UML и шаблонов проектирования». В отличие от классических читателю паттернов из Банды Четырех, GRAPS паттерны не имеют выраженной структуры, четкой области применения и конкретной решаемой проблемы, а лишь представляют собой обобщенные подходы/рекомендации/принципы, используемые при проектировании дизайна системы.

GRASP состоит из 5 основных и 4 дополнительных шаблонов.

Основные шаблоны:

- Information Expert
- Creator
- Controller
- Low Coupling | Loose Coupling
- High Cohesion | Tight Cohesion

Дополнительные шаблоны:

- Polymorphism
- Pure Fabrication
- Indirection
- Protected Variations

Nemchinsky  
https://www.youtube.com/watch?v=pswA3Prf_YQ&feature=youtu.be

1. Who has to process information? => Assign the responsibility to process the information to the one who has/owns the data.
2. Who has to create instances of a class? => Class that uses an instance of another class has to create that instance. And create the instance only when it is needed.
3. ??? Лови багатопоточнысть ы перенаправляй в один поток
4. The less inter class dependencies, the better it is. This means we can reuse classes.
5. A class has to have the most relared properties/methods, something very close by meaning/sense. Other things not closely related to this has to be in another class. The same as single responsibility principle.
6. The same as pillar polimorphism principle.
7. Чистая видумка. Іноді не завжди можливо представити ентіті у вигляді реальних бізнес домейн ентіті, тоді приходиться вводити штучні абстрактні речі.
   Речі яких в предметній області нема, але для того щоб писати код with High Cohesion, нам необхідні програмні абстракції.
   Приклади чистої видумки: promise, socket, array, event emitter, timeout.
   https://www.youtube.com/watch?v=CV577a0RHBM&list=PLHhi8ymDMrQby8kXxsz2-J6-lsv0ilEg2&index=4
   Nemchinsky says to skip and forget this at all.
8. Call classes through interfaces, not directly. The same as IoC. The same as Dependecy inversion principle.

Звернення до обєкта через інтерфейс, що позволяє розвернути залежність. Тепер не сам обєкт залежить від іншого обєкта, тепер другий обєкт залежить від свого інтерфейса.

Interface являється пренадлежністю обєкта який його викликає/використовує, а не імплементить. 53:00.

class Database {
setDatabase(param: IParam)

    Тут інтерфейс IParam більш потрібний для Database, ніж для класу який буде на місці param,
    бо якщо те що подамо на вхід в Database не буде відповідати інтерфейсу IParam,
    то Databse буде ПОЛАМАНИЙ, і не зможе працювати коректно;

    Тут навіть можна застосувати шаблон адаптер, щоб завернути те що ми хочемо передати в param в адаптер і заімплементити IParam інтерфейс в адаптері.

}

Іnterface - це клас - абстрактний клас в якого всі методи абстрактні, тому це також наслідування.

9. Щоб любі зміни вкоді не ламали його. The same as open-closed principle.

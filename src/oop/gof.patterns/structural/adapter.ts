export {};

// allows incompatible interfaces to collaborate through adapter

// https://www.youtube.com/watch?v=bTiAfLbmsnY
// https://refactoring.guru/design-patterns/adapter
// https://www.youtube.com/watch?v=wA3keqCeKtM&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=17
// https://www.youtube.com/watch?v=YJVj4XNASDk

// oldInterface = new Interface()
// fancyInteface = new FancyInteface()
// adaptedInterface = new Adapter(new FancyInteface())
// service = new Service()
// service.display(oldInterface) ok
// service.display(fancyInteface) error
// service.display(adaptedInterface) ok

type XmlOptions = 'XmlFormatOptions';
type JsonOptions = 'JsonFormatOptions';

type XmlAnalytics = {
  options: XmlOptions;
  source: string;
  analytics: number[];
};

type JsonAnalytics = {
  options: JsonOptions;
  source: string;
  analytics: number[];
};

interface IAnalyticsService {
  fetchAnalytics(options: XmlOptions): XmlAnalytics;
}

class AnalyticsApp {
  private readonly analyticsSrvice: IAnalyticsService;

  constructor(analyticsSrvice: IAnalyticsService) {
    this.analyticsSrvice = analyticsSrvice;
  }

  displayData(options: XmlOptions): void {
    const analytics = this.analyticsSrvice.fetchAnalytics(options);
    console.log(analytics);
  }
}

class AnalyticsSrvice implements IAnalyticsService {
  fetchAnalytics(options: XmlOptions): XmlAnalytics {
    const analytics: XmlAnalytics = {
      options,
      source: 'Data received from AnalyticsService',
      analytics: [1, 2, 3],
    };
    return analytics;
  }
}

class FancyAnalyticsSrvice {
  fetchData(options: JsonOptions): JsonAnalytics {
    const analytics: JsonAnalytics = {
      options,
      source: 'Data received from FancyAnalyticsService',
      analytics: [40, 50, 60],
    };
    return analytics;
  }
}

class FancyAnalyticsSrviceAdapter implements IAnalyticsService {
  private readonly adaptee: FancyAnalyticsSrvice;

  constructor(adaptee: FancyAnalyticsSrvice) {
    this.adaptee = adaptee;
  }

  fetchAnalytics(options: XmlOptions): XmlAnalytics {
    const jsonOptions: JsonOptions = this.convertXmlToJson(options);
    const jsonResponse: JsonAnalytics = this.adaptee.fetchData(jsonOptions);
    const xmlData: XmlAnalytics = this.convertJsonToXml(jsonResponse);

    return xmlData;
  }

  private convertXmlToJson(data: XmlOptions): JsonOptions {
    (data as JsonOptions) = 'JsonFormatOptions';
    return data as JsonOptions;
  }

  private convertJsonToXml(data: JsonAnalytics): XmlAnalytics {
    (data as unknown as XmlAnalytics).options = 'XmlFormatOptions';
    return data as unknown as XmlAnalytics;
  }
}

const analyticsSrvice = new AnalyticsSrvice();
// const fancyAnalyticsSrvice = new FancyAnalyticsSrvice();
const adaptedFancyAnalyticsSrvice = new FancyAnalyticsSrviceAdapter(new FancyAnalyticsSrvice());

const analyticsAppv1 = new AnalyticsApp(analyticsSrvice);
// const analyticsAppv2 = new AnalyticsApp(fancyAnalyticsSrvice); // Error => ok
const analyticsAppv3 = new AnalyticsApp(adaptedFancyAnalyticsSrvice);

analyticsAppv1.displayData('XmlFormatOptions');
analyticsAppv3.displayData('XmlFormatOptions');

// console.log(fancyAnalyticsSrvice.fetchData('JsonFormatOptions')); // Works => ok

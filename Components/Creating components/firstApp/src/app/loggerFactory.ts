// export const loggerFactory = (config: AppConfig) => {
//   return new LoggerService(config.logLevel, config.endpoint);
// };
// providers: [
//   {
//     provide: LoggerService,
//     useFactory: loggerFactory,
//     deps: [APP_CONFIG], // Dependencies for the factory function
//   },
// ];
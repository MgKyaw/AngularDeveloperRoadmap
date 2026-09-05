import {InjectionToken, inject} from '@angular/core';
import {APP_CONFIG} from './config.token';
// Logger function type
export type LoggerFn = (level: string, message: string) => void;
// Global logger function with dependencies
export const LOGGER_FN = new InjectionToken<LoggerFn>('logger.function', {
  providedIn: 'root',
  factory: () => {
    const config = inject(APP_CONFIG);
    return (level: string, message: string) => {
    //   if (config.features.logging !== false) {
    //     console[level](`[${new Date().toISOString()}] ${message}`);
    //   }
    };
  },
});
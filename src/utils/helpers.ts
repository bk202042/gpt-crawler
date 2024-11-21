export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class RateLimiter {
  private lastCall: number = 0;
  
  constructor(private delayMs: number) {}
  
  async waitForNext(): Promise<void> {
    const now = Date.now();
    const timeSinceLastCall = now - this.lastCall;
    
    if (timeSinceLastCall < this.delayMs) {
      await sleep(this.delayMs - timeSinceLastCall);
    }
    
    this.lastCall = Date.now();
  }
}

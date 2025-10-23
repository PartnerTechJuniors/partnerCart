import { Injectable, signal } from '@angular/core';

interface Toast {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastNotify {
  public notifies = signal<Toast[]>([]);

  displayToast(message: string, type: Toast['type'] = 'success') {
    const id = Date.now();
    const newToast: Toast = { id, message, type };
    
    this.notifies.update(prev => [...prev, newToast]);

    setTimeout(() => this.removeToast(id), 3000);
  }

  removeToast(id: number) {
    this.notifies.update(prev => prev.filter(t => t.id !== id));
  }

  clearAll() {
    this.notifies.set([]);
  }
}

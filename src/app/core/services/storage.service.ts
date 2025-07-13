import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	// localStorage and sessionStorage

	public saveItem(key: string, value: any): void {
		if (!this.getItem(key)) {
			if (typeof window !== "undefined") {
				window.localStorage.setItem(key, JSON.stringify(value));
			}
		} else {
			this.updateItem(key, value);
		}
	}

	public getItem(key: string): any {
		if (typeof window !== "undefined") {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : item
		}
	}

	public deleteItem(key: string): void {
		if (typeof window !== "undefined") {
			window.localStorage.removeItem(key);
		}
	}

	public clearAll(): void {
		if (typeof window !== "undefined") {
			window.localStorage.clear();
		}
	}

	private updateItem(key: string, value: any): void {
		if (typeof window !== "undefined") {
			window.localStorage.removeItem(key);
			window.localStorage.setItem(key, JSON.stringify(value));
		}
	}
}
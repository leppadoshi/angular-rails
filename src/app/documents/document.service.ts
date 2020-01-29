import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Document } from './document';

@Injectable()
export class DocumentService {
	private documentsUrl = 'http://localhost:4201/freelance_documents.json';

	constructor(
		private http: HttpClient
	) {}

	getDocuments(): Observable<Document[]> {
		return this.http.get(this.documentsUrl)
						.pipe(map((response: Response) => <Document[]>response.json()));
	};
}
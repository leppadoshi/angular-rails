import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.scss']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	
	documents: Document[] = [
		{
			title: "My First Doc",
			description: "adwadwawgawgwjjfiwjaifja",
			file_url: 'https://google.com',
			updated_at: '1/23/2020',
			image_url: 'https://i.kinja-img.com/gawker-media/image/upload/s--nINVL1sd--/c_scale,f_auto,fl_progressive,q_80,w_800/sb1kx4u3sq3nn1duhjx9.jpg'
		},
		{
			title: "My Second Doc",
			description: "adwadwawgawgwjjfiwjaifja",
			file_url: 'https://google.com',
			updated_at: '1/23/2020',
			image_url: 'https://i.kinja-img.com/gawker-media/image/upload/s--SllZRgsq--/c_scale,f_auto,fl_progressive,q_80,w_800/cr1nkcy18u3qungwaupp.jpg'
		},
		{
			title: "My Last Doc",
			description: "adwadwawgawgwjjfiwjaifja",
			file_url: 'https://google.com',
			updated_at: '1/23/2020',
			image_url: 'https://i.kinja-img.com/gawker-media/image/upload/s--RHgj8eDQ--/c_scale,f_auto,fl_progressive,q_80,w_800/cqolclwf0io8fzod1rl1.jpg'
		}
	]
}
import { Component, OnInit, ViewChild } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { RadSideDrawerComponent } from 'nativescript-telerik-ui/sidedrawer/angular';
import { ObservableArray } from "data/observable-array";

import { PlaylistItem } from "../shared/models/playlist-item";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

	public playlistItemList: ObservableArray<PlaylistItem>;
    public selectedItemIndex: number;
	public playlistItemLoading: boolean;

	ngOnInit() {
        this.selectedItemIndex = -1;
		this.playlistItemLoading = true;
        this.playlistItemList = new ObservableArray<PlaylistItem>();
        this.playlistItemList.push(new PlaylistItem("test", "test", "1:00", 1, "image", "http://lorempixel.com/400/200/"));
        this.playlistItemList.push(new PlaylistItem("test", "test", "1:00", 2, "image", "http://lorempixel.com/400/200/"));
	}

	toggleSidedrawer(args) {
		this.drawerComponent.sideDrawer.toggleDrawerState();
	}

	itemSelected(args) {
		this.playlistItemList.forEach((item, index) => {
			if(args.object.bindingContext === item) {
				item.selected = true;
				this.selectedItemIndex = index;
			} else {
				item.selected = false;				
			}
		});
        this.drawerComponent.sideDrawer.showDrawer();
	}
}

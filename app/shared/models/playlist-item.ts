
export class PlaylistItem {
  public infoText : string;
  public selected: boolean;

  constructor(public content_id : string, public name : string, public duration : string, public ordering : number, public content_type : string, public thumbnail_url : string) {
    this.selected = false;
    let icon : string = ""; // image
    switch (content_type) {
      case "video":
        icon = "\uf1c8";
        break;
      case "image":
        icon = "\uf1c5";
        break;
      case "channel":
        icon = "\uf09e";
        break;
      case "playlist":
        icon = "\uf0ca";
        break;
      case "external_media":
        icon = "\uf08e";
        break;
      default:
        icon = "\uf016";
        break;
    }
    this.infoText = `${icon} ${this.duration}`;
  }
}
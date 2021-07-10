class FaviLib {
    faviconElement: HTMLLinkElement
    uriDict: Record<string, HTMLImageElement>
    linkedCanvas: HTMLCanvasElement

    constructor(){
        this.faviconElement = document.querySelector("link[rel*='icon']")
        this.uriDict = {}
        this.linkedCanvas = null
    }

    link_to_canvas(canvas: HTMLCanvasElement){
        this.linkedCanvas = canvas
    }

    update_from_canvas(){
        if(this.linkedCanvas == null){
            console.log("Error: Tried to update from canvas without any canvas linked")
        }
        this.faviconElement.href = this.linkedCanvas.toDataURL()
    }

    update_from_image(image: HTMLImageElement){
        this.faviconElement.href = image.src
    }

    load_uris(uris: Array<string>){
        for(let uri of uris){
            var im = new Image()
            im.src = uri
            this.uriDict[uri] = im
        }
    }

    update_from_uri(uri: string){
        this.faviconElement.href = this.uriDict[uri].src
    }
}
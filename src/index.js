import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'

/**
 * This is the main entry point for your plugin.
 *
 * All information regarding plugin development can be found at
 * https://developer.vatom.com/plugins/plugins/
 *
 * @license MIT
 * @author Vatom Inc.
 */


// To Sideload: http://localhost:9000/plugin.js


export default class MyPlugin extends BasePlugin {

    /** Plugin info */
    static id = "vatom-template-plugin"
    static name = "webframe 2.0 plugin"
    static panelId 


    /** Called on load */
    onLoad() {

        console.log()
        this.objects.registerComponent(MyComponent, {
            id: 'my-component', 
            name: 'webframe2.0',
            description: 'shows an iframed site when someone clicks the object'
        })

        // Create a button in the toolbar
        this.menus.register({
            icon: this.paths.absolute('button-icon.png'),
            text: 'webframe2.0',
            section: 'insert-object',
                
        
        })

    }
    onMessage(data){
        // this.menus.alert('success', 'yo','success')
        console.log("The world to travel to is", data)
        console.log("id of popup 2", this.panelId)
        this.world.travelTo(data, this.paths.absolute('load_img.jpg'))
        this.menus.closePopup(this.panelId)
       
    }

    showPopup() {
           // Show it
            this.menus.displayPopup({
            title: ' ',
            panel: {
                iframeURL: 'https://color-test-web.vercel.app/',
                //this.paths.absolute('popup.html')
                width: '100%',
                height: '100vh'
            }
        }).then(id => {
            this.panelId = id;
            console.log("id of popup", id) 
        })
    }
}

class MyComponent extends BaseComponent {
    /** Called when an object with this component is loaded */
    onLoad() {
        console.log('Loaded component!')
    }
    /** Called when the user clicks on this object */
    onClick() {
        this.plugin.showPopup() 
    }
}

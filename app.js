//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

/**
 * A simple demo showing how to overlay floating components using Sencha Touch.
 */
function getTemplate(x, scrollable){
 var template={
			xtype: 'panel',
			

			 layout:{
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [
						{
							xtype: 'panel',
							flex:1,									
							 contentEl : 'contenedor_' + x,
							  styleHtmlContent: true,
							  styleHtmlCls : 'contenedores',
							scrollable: scrollable,				   
						},
						{
							xtype: 'toolbar',
							docked: 'bottom',
							height:70,
							items: [
									{
										xtype: 'panel',
										contentEl : 'pie_' + x
									}
								
							]
						}
					]
			}
			return template;
}
function getTemplateProductos(x){
 var template={
			xtype: 'panel',
			 layout:{
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [
						{
							xtype: 'panel',
							flex:1,									
							styleHtmlCls : 'contenedor_resultados_' + x,
							styleHtmlContent: true,
							layout: 'hbox',
							items: [
								{
									//styleHtmlCls : 'menu_proyector_' + x,
									//styleHtmlContent: true,
									contentEl : 'menu_' + x ,
									 ui: 'plain',
									style: 'background-color: #5E99CC;',
									width: 227
								},								
								{
									xtype: 'panel',
									flex:1,									
									
									layout: 'vbox',
									items: [{
												styleHtmlCls : 'cabeza_resultado',
												styleHtmlContent: true,
												contentEl : 'resultado_' + x,
												style: 'background-color: #5E99CC;',
												 ui: 'plain',
												height: 100
											},{											
												styleHtmlCls : 'listado_' + x,	
												styleHtmlContent: true,
												flex:1,											
												contentEl : 'contenedor_' + x,												
												scrollable: {
													direction: 'horizontal',
													directionLock: true
												}											
											}
										]
								}

							
							]
							
						},
						{
							xtype: 'toolbar',
							docked: 'bottom',
							height:70,
							items: [
									{
										xtype: 'panel',
										contentEl : 'pie_' + x
									}
								
							]
						}
					]
			}
			return template;
}
Ext.application({
    glossOnIcon: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    requires: [
        'Ext.Button',
        'Ext.Panel',
        'Ext.Toolbar',
		'Ext.Label',
		'Ext.Anim',
		'Ext.Img'
    ],

    launch:function () {
        var isPhone = Ext.os.deviceType == 'Phone',
            overlay;

        // Here we create the base of our example, which is a simple toolbar at the bottom with 2 buttons
        Ext.Viewport.add({
			xtype: 'panel',
			  layout: 'card',
			  id:"cardPanel",
			items:[{
			xtype: 'panel',
			showAnimation: {
                                        type: 'slideIn',
										direction:'right'
                                        //,duration: 5000
                                    },

			 layout:{
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [
                {
					xtype: 'panel',
					flex:1,
							
					 contentEl : 'contenedor1'
					 
					
                   
                },
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
					height:70,
                    // Insert some buttons and space them out
					//Latam.BenQ.com / BenQ.com.mx / BenQ.com.br
                    items: [
						{
							xtype: 'panel',
							contentEl : 'pie_1'
						}
                    ]
                }
            ]
			},//card 2
			
			getTemplate(2,{	direction: 'vertical', directionLock: true}),
			getTemplate(3,{	direction: 'vertical', directionLock: true}),
			getTemplate(4,{	direction: 'vertical', directionLock: true}),
			getTemplate(5,{	direction: 'vertical', directionLock: true}),
			getTemplate(6,{	direction: 'vertical', directionLock: true}),
			getTemplate(7,{	direction: 'vertical', directionLock: true}),
			getTemplate(8,{	direction: 'vertical', directionLock: true}),
			getTemplateProductos(9),
			getTemplate(10,{	direction: 'vertical', directionLock: true}),
			getTemplate(11,{	direction: 'vertical', directionLock: true}),
			getTemplateProductos(12),
			getTemplate(13,{	direction: 'vertical', directionLock: true}),
			getTemplate(14,{	direction: 'vertical', directionLock: true}),
			getTemplateProductos(15),
			getTemplate(16,{	direction: 'vertical', directionLock: true}),
			getTemplateProductos(17),
			getTemplate(18,{	direction: 'vertical', directionLock: true}),
			getTemplate(19,{	direction: 'vertical', directionLock: true}),
			getTemplate(20,{	direction: 'vertical', directionLock: true}),
			getTemplate(21,{	direction: 'vertical', directionLock: true}),
			getTemplate(22,{	direction: 'vertical', directionLock: true}),
			]
        });
		var img = Ext.create('Ext.Img', {
			src: 'imgs/ipad_1024/facebook.png',
			height: 64,
			width: 64,
			//renderTo:'FB_1',
			listeners: {
						tap : function(e, t) {
							goto(2)
							//window.open(e.getTarget(null, true).getAttribute('href'), '_blank');
						}
					}
		});


        overlay = Ext.Viewport.add({
            xtype: 'panel',

            // We give it a left and top property to make it floating by default
            left: 0,
            top: 0,

            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,

            // Make it hidden by default
            hidden: true,

            // Set the width and height of the panel
            width: isPhone ? 260 : 400,
            height: isPhone ? '70%' : 400,

            // Here we specify the #id of the element we created in `index.html`
            contentEl: 'content',

            // Style the content and make it scrollable
            styleHtmlContent: true,
            scrollable: true,

            // Insert a title docked at the top with a title
            items: [
                {
                    docked: 'top',
                    xtype: 'toolbar',
                    title: 'Overlay Title'
                }
            ]
        });

        // Add a new listener onto the viewport with a delegate of the `button` xtype. This adds a listener onto every
        // button within the Viewport, which includes the buttons we added in the toolbar above.
       
    }
});
var actualCard=0;
function prev(){
	if(actualCard<=0)
		return;
	actualCard--;
	if(actualCard<0)
		actualCard=0;
	Ext.getCmp('cardPanel').getLayout().setAnimation( {
																type: 'slide',
																direction:'right'
																//,duration: 5000
																} );
	Ext.getCmp('cardPanel').setActiveItem(actualCard,{type: 'slide', direction: 'right'});
}
function next(){
	if(actualCard>=22)
		return;
	actualCard++;
	Ext.getCmp('cardPanel').getLayout().setAnimation( {
																type: 'slide',
																direction:'left'
																//,duration: 5000
																} );
	Ext.getCmp('cardPanel').setActiveItem(actualCard,{type: 'slide', direction: 'left'});
}
function goto(x){
	actualCard=x;
	
	Ext.getCmp('cardPanel').setActiveItem(x);
}

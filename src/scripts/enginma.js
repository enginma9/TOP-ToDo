const Enginma = {
    clearElement : function( item ) {
        var first = item.firstElementChild;
        while (first) {
            first.remove();
            first = item.firstElementChild;
        }
    },
    appendChildren : function({ parent, children = [] }) {
        children.forEach((child) => {
            parent.appendChild(child)
        });
        /*
        for( let i = 0; i < children.length; i++ ){
            parent.appendChild( children[i] );
        }
        */
    },
    createLink : function({ text = "A Link", address = "https://google.com", classes = [], id = "" }) {
        const newLink = document.createElement('a');
        if (id != "") {
            newLink.setAttribute( "id", id );
        }
        if( address === "https://google.com" ){
            address += "/search?q=" + text.split(' ').join('+');
        }
        newLink.classList.add(...classes);
        newLink.appendChild(document.createTextNode(text));
        newLink.href = address;
        newLink.target = "_blank";
        newLink.rel = "noreferrer noopener";
        return newLink;
    },
    createObject : function({ type = 'div', id = "", classes = [], insertText=false, text="" }) {
        let object = document.createElement(type);
        object.setAttribute('id', id);
        object.classList.add(...classes);
        if( insertText == true ){
            object.appendChild( document.createTextNode( text ) );
        }
        //console.log('Creating object: type:', type, " id:", id);
        return object;
    },
    createInput : function({ where, id="", type="text", classes=[], options=[] }){
        let input = document.createElement("input");
        input.setAttribute( 'id', id );
        input.type = type;
        if( type == "select"){
            options.forEach( (optionText) =>{
                input.add( new Option( optionText, optionText ) )
            });
        }
        input.classList.add(...classes);
        where.appendChild( input );
        return input;
    },
    hideExcept : function({ parent, except="something-ridiculous", hideClass="hide-me" }){
        // let children = parent.getElementsByTagName('div'); // this returns every div within, not just direct children
        for( const child of parent.children ){
            //console.log( child.tagName, child.id );
            if( child.id != except ){
                child.classList.add( hideClass );
            }else{
                child.classList.remove( hideClass );
            }
        }
    },
    createImage : function({ id="", classes=[], src="" }){
        let imgObject = document.createElement('img');
        imgObject.setAttribute( 'id', id );
        imgObject.classList.add(...classes);
        imgObject.src = src;
        return imgObject;
    },
}

export default Enginma;
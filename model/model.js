var MODEL = (function(){
    
    var _showAlert = function(buttonName){
            alert("My button is " + buttonName);
        };
    
        var _getHome = function(callback) {

            
            let text = `<h1>This is the Home Page </h1><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati labore optio ullam debitis minima alias illum odio fuga. Deserunt, repellendus repellat quos distinctio maiores rem assumenda cupiditate officia pariatur.</p> <br> <img src="images/guitar.jpg"/>`;
    
            return callback(text);
            
        }

        var _getAbout = function(callback) {

            
            let text = `<h1>This is the About Page </h1><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati labore optio ullam debitis minima alias illum odio fuga. Deserunt, repellendus repellat quos distinctio maiores rem assumenda cupiditate officia pariatur.</p> <br> <img src="images/recorder.jpg"/>`;
    
            return callback(text);
            
        }

        var _getProducts = function(callback) {

            
            let text = `<h1>This is the Products Page </h1><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati labore optio ullam debitis minima alias illum odio fuga. Deserunt, repellendus repellat quos distinctio maiores rem assumenda cupiditate officia pariatur. <br> <img src="images/drums.jpg"/></p>`;
    
            return callback(text);
            
        }

        var _getContact = function(callback) {

            
            let text = `<h1>This is the Contact Page </h1><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati labore optio ullam debitis minima alias illum odio fuga. Deserunt, repellendus repellat quos distinctio maiores rem assumenda cupiditate officia pariatur.</p> <br> <img src="images/mic.jpg"/>`;
    
            return callback(text);
            
        }

    
            return {
                showAlert: _showAlert,
                getHome: _getHome,
                getAbout: _getAbout,
                getProducts: _getProducts,
                getContact: _getContact,

            };
    })();
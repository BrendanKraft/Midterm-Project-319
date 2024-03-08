function handleClassic() {
    window.location.href = 'classicSunglasses.html';
}
function handleBlue() {
    window.location.href = 'blue.html';
}
function handleMurray() {
    window.location.href = 'murray.html';
}
function handleRed() {
    window.location.href = 'red.html';
}
function handleCamera3() {
    window.location.href = 'camera3.html';
}
function handleCamera2() {
    window.location.href = 'camera2.html';
}
function handleCamera1() {
    window.location.href = 'camera1.html';
}
function handleCamera() {
    window.location.href = 'camera.html';
}
function parseJsonFileSG(name) {
    return fetch('data.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            console.log(data[0].Sunglasses);
            for(let i=0;i<data[0].Sunglasses.length;i++){
                if(data[0].Sunglasses[i].Name === name){
                    return data[0].Sunglasses[i];
                }
            }
            return null;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function parseJsonFileCA(name) {
    return fetch('data.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            console.log(data[0].Camera);
            for(let i=0;i<data[0].Camera.length;i++){
                if(data[0].Camera[i].Name === name){
                    return data[0].Camera[i];
                }
            }
            return null;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function Sunglasses(name) {
    //console.log('classicSunglasses');
    name = document.title;
    data = parseJsonFileSG(name)
        .then(data => {
            //const item = data[];
            console.log(data);
            document.getElementById('item').textContent  += data.Name;
            document.getElementById('price').innerText += " "+data.Price;
            document.getElementById('description').innerText +=" "+ data.Description;
        });
}
function Camera(name) {
    //console.log('classicSunglasses');
    name = document.title;
    data = parseJsonFileCA(name)
        .then(data => {
            //const item = data[];
            console.log(data);
            document.getElementById('item').textContent  += data.Name;
            document.getElementById('price').innerText += " "+data.Price;
            document.getElementById('description').innerText +=" "+ data.Description;
        });
}

// Call the function from HTML

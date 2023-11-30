// upload image
const uploadImage = () => {
    // file input
    const fileInput = document.getElementById('file-input');
    const image = fileInput.files[0];
    let formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');
    // api key
    const apiKey = 'gNDWiaDLX2CmYka21wm97m4C';
    if (image) {
        // display spinner
        document.querySelector('.spinner-border').style.display = 'block';
        // fetch
        fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': apiKey,
            },
            body:formData
        })
        .then(response => response.blob())
        .then(data => {
            const imageUrl = URL.createObjectURL(data);
            displayImage(imageUrl);
        })
    }
    else {
        alert('Please Choose an Image!');
    }
}
// display image
const displayImage = (image) => {
    // container 
    const container = document.getElementById('remove-bg-container');
    // create div
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="bg-white p-4 mt-4 border shadow rounded">
            <!-- removed background image -->
            <img src="${image}" id="bg-removed-image" class="w-100 border" alt="bg-removed-image"><br>
            <!-- download image -->
            <a href="${image}" download="remove-background.png">
                <button class="btn btn-primary px-5 mt-3 fw-bold rounded-0">Download</button>
            </a>
        </div>
    `;
    container.appendChild(div);
    // display spinner
    document.querySelector('.spinner-border').style.display = 'none';
}
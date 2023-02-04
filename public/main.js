async function init() {
  //rustapp is a module
  let rustApp = null;
  try {
    rustApp = await import("../pkg");
  } catch (e) {
    console.error(e);
    return;
  }
  const input = document.getElementById("upload");
  const fileReader = new FileReader();
  //will be called once the file is uploaded
  fileReader.onloadend = () => {
    const base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ""
    );
    let img_url = rustApp.grayscale(base64);
    document.getElementById("new-img").setAttribute("src", img_url);
  };
  input.addEventListener("change", () => {
    fileReader.readAsDataURL(input.files[0]);
  });
}

init();

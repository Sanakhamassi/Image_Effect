// ce sont des crates
use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
//use a buffer to store an image until the conversion is complete
#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    log(&"Grayscale called".into());
    let base64_to_vector = decode(encoded_file).unwrap();

    log(&"image decoded".into());
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"image laoded".into());
    //change the color of an image
    img = img.grayscale();
    log(&"Grayscale effect applied".into());
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"New image written".into());
    let encoded_image = encode(&buffer);
    //format will return a string
    let data_url = format!("data:image/png;base64,{}", encoded_image);
    return data_url;
}

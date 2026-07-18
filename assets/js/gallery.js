const photos = [

{
image:"../assets/images/02_Timeline/01_Baby/baby_blue_frock.jpg",
caption:"The day our story began ❤️"
},

{
image:"../assets/images/02_Timeline/01_Baby/baby_sleeping_with_sibling.jpg",
caption:"Tiny smiles... endless memories 🥹"
},

{
image:"../assets/images/02_Timeline/01_Baby/childhood_closeup_yellow.jpg",
caption:"The cutest little troublemaker 💛"
},

{
image:"../assets/images/02_Timeline/02_Early_Childhood/childhood_bridge.jpg",
caption:"Every bridge led to another adventure 🌉"
},

{
image:"../assets/images/02_Timeline/02_Early_Childhood/childhood_hug.jpg",
caption:"Some hugs stay forever 🤍"
},

{
image:"../assets/images/02_Timeline/02_Early_Childhood/school_uniform.jpg",
caption:"School days... when life was simple 📚"
},

{
image:"../assets/images/02_Timeline/03_School_And_Teenage/birthday_15.jpg",
caption:"Growing up one birthday at a time 🎂"
},

{
image:"../assets/images/02_Timeline/03_School_And_Teenage/teen_yellow_dress.jpg",
caption:"Confidence started shining ✨"
},

{
image:"../assets/images/02_Timeline/03_School_And_Teenage/teen_traditional_gown.jpg",
caption:"Elegance was always there 💜"
},

{
image:"../assets/images/02_Timeline/04_Recent/recent_floral_portrait.jpg",
caption:"The smile that never changed 🌸"
},

{
image:"../assets/images/02_Timeline/04_Recent/recent_pink_saree.jpg",
caption:"Happy 20th Birthday, Moti ❤️"
},

{
image:"../assets/images/03_Family/01_Mummy/mummy_daughter_car_selfie.jpg",
caption:"No matter how old you grow... Mom's love stays the same ❤️"
},

{
image:"../assets/images/03_Family/02_Papa/papa_daughter_professional.jpg",
caption:"Dad's little princess... forever 👑"
},

{
image:"../assets/images/03_Family/04_Full_Family/current_family_professional.jpg",
caption:"Together is our favourite place to be ❤️"
},

{
image:"../assets/images/03_Family/04_Full_Family/family_lake_selfie.jpg",
caption:"Some memories deserve to stay forever 📸"
},

{
image:"../assets/images/03_Family/04_Full_Family/close_family_group.jpg",
caption:"Home isn't a place... it's these people ❤️"
},
{
image:"../assets/images/03_Family/03_Grandparents_And_Extended/with_dadaji.jpg",
caption:"Blessings that stay forever 🤍"
},

{
image:"../assets/images/03_Family/03_Grandparents_And_Extended/with_dadi_and_sibling.jpg",
caption:"Generations of love 💜"
},
{
image:"../assets/images/04_Siblings/01_Childhood/childhood_costume_with_brother.jpg",
caption:"Partners in every childhood adventure 🤍"
},

{
image:"../assets/images/04_Siblings/01_Childhood/childhood_temple_with_brothers.jpg",
caption:"Always together... no matter what 💜"
},

{
image:"../assets/images/04_Siblings/01_Childhood/childhood_traditional_with_brother.jpg",
caption:"Matching outfits, matching memories ✨"
},

{
image:"../assets/images/04_Siblings/02_Rakhi_And_Tilak/rakhi_2019.jpg",
caption:"The yearly tax collection festival 😂🎁"
},

{
image:"../assets/images/04_Siblings/02_Rakhi_And_Tilak/tilak_with_younger_brother.jpg",
caption:"One more memory we'll never forget ❤️"
},

{
image:"../assets/images/04_Siblings/03_Recent/siblings_temple_selfie.jpg",
caption:"Still annoying each other... still inseparable 😌"
},

{
image:"../assets/images/04_Siblings/03_Recent/siblings_wedding_professional.jpg",
caption:"From tiny kids to grown-up memories 💕"
},
{
image:"../assets/images/05_Festivals_Trips/01_Festivals/diwali_rangoli.jpg",
caption:"Every festival became brighter because of you ✨"
},

{
image:"../assets/images/05_Festivals_Trips/01_Festivals/holi_portrait.jpg",
caption:"Colours suit you... but your smile suits you even more 🌈"
},

{
image:"../assets/images/05_Festivals_Trips/02_Trips/boat_family_selfie.jpg",
caption:"Every trip became a beautiful memory 🚤"
},

{
image:"../assets/images/05_Festivals_Trips/02_Trips/temple_family_selfie.jpg",
caption:"No matter where life takes us... these moments stay forever ❤️"
}
];
let index=0;

const img=document.getElementById("galleryImage");
const cap=document.getElementById("galleryCaption");

function loadPhoto(){

img.src=photos[index].image;
cap.textContent=photos[index].caption;

}

loadPhoto();

document.getElementById("nextBtn").onclick=function(){

if(index<photos.length-1){

index++;

loadPhoto();

}else{

window.location.href="ending.html";

}

}

document.getElementById("prevBtn").onclick=function(){

if(index>0){

index--;

loadPhoto();

}

}
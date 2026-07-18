const startVerify = document.getElementById("startVerify");
const loadingBox = document.querySelector(".loading-box");
const progress = document.querySelector(".progress");
const checkTitle = document.getElementById("checkTitle");
const checkText = document.getElementById("checkText");

const necklaceBox = document.querySelector(".necklace-box");
const wearNecklace = document.getElementById("wearNecklace");

const cameraBox = document.querySelector(".camera-box");

const checks = [
    {
        title: "Checking 1/5...",
        text: "Scanning facial expressions... 👀"
    },
    {
        title: "Checking 2/5...",
        text: "Detecting smile... 😊"
    },
    {
        title: "Checking 3/5...",
        text: "Initializing AI engine... 🤖"
    },
    {
        title: "Checking 4/5...",
        text: "Preparing camera... 📷"
    },
    {
        title: "Checking 5/5...",
        text: "Final verification... ✨"
    }
];

function wait(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

async function runChecks() {

    checkTitle.style.transition = "opacity 0.3s ease";
    checkText.style.transition = "opacity 0.3s ease";

    for (let i = 0; i < checks.length; i++) {

        if (i > 0) {
            checkTitle.style.opacity = "0";
            checkText.style.opacity = "0";

            await wait(300);
        }

        checkTitle.textContent = checks[i].title;
        checkText.textContent = checks[i].text;

        progress.style.transition = "none";
        progress.style.width = "0%";

        void progress.offsetWidth;

        checkTitle.style.opacity = "1";
        checkText.style.opacity = "1";

        progress.style.transition = "width 1.8s linear";
        progress.style.width = "100%";

        await wait(2200);
    }

    loadingBox.style.display = "none";
    necklaceBox.style.display = "block";
}

if (startVerify) {

    startVerify.addEventListener("click", function () {

        startVerify.style.display = "none";
        loadingBox.style.display = "block";

        runChecks();

    });

}

if (wearNecklace) {

    wearNecklace.addEventListener("click", function () {

        necklaceBox.style.display = "none";

        cameraBox.style.display = "block";

        startCamera();

    });

}

const camera = document.getElementById("camera");

async function startCamera() {

    try{

        const stream = await navigator.mediaDevices.getUserMedia({

            video:{
                facingMode:"user"
            },

            audio:false

        });

        camera.srcObject = stream;

    }

    catch(error){

        alert("Camera permission is required.");

    }

}
const selfieVideo = document.getElementById("camera");
const selfieCanvas = document.getElementById("canvas");
const selfieCaptureButton = document.getElementById("captureBtn");

if (selfieCaptureButton) {

    selfieCaptureButton.addEventListener("click", function () {

        if (selfieVideo.readyState < 2) {
            alert("Camera load hone do, phir selfie lena.");
            return;
        }

        selfieCanvas.width = selfieVideo.videoWidth;
        selfieCanvas.height = selfieVideo.videoHeight;

        const context = selfieCanvas.getContext("2d");

        context.translate(selfieCanvas.width, 0);
        context.scale(-1, 1);

        context.drawImage(
            selfieVideo,
            0,
            0,
            selfieCanvas.width,
            selfieCanvas.height
        );

        selfieVideo.style.display = "none";
        selfieCaptureButton.style.display = "none";
        selfieCanvas.style.display = "block";

        const stream = selfieVideo.srcObject;

        if (stream) {
            stream.getTracks().forEach(function (track) {
                track.stop();
            });
        }

        setTimeout(async function () {

            cameraBox.style.display = "none";

            const aiBox = document.querySelector(".ai-box");
            const aiProgress = document.querySelector(".ai-progress");
            const aiResults = document.querySelector(".ai-results");
            const resultLines = document.querySelectorAll(".ai-results p");
            const beautyScore = document.querySelector(".beauty-score");
            const aiError = document.getElementById("aiError");

            aiBox.style.display = "block";

            aiProgress.style.transition = "none";
            aiProgress.style.width = "0%";

            void aiProgress.offsetWidth;

            aiProgress.style.transition = "width 3s linear";
            aiProgress.style.width = "100%";

            await wait(3200);

            aiResults.style.display = "block";

            resultLines.forEach(function (line) {
                line.style.opacity = "0";
                line.style.transform = "translateY(10px)";
                line.style.transition = "0.4s ease";
            });

            for (const line of resultLines) {
                line.style.opacity = "1";
                line.style.transform = "translateY(0)";
                await wait(650);
            }

            beautyScore.style.display = "block";
            beautyScore.innerHTML = `
                <p>Beauty Score...</p>
                <p>Calculating...</p>
            `;

            await wait(2500);

            beautyScore.style.display = "none";
            aiError.style.display = "block";
           aiError.scrollIntoView({
    behavior: "smooth",
    block: "center"
});
await wait(2200);

aiError.style.display = "none";

const roastBox = document.getElementById("roastBox");

roastBox.style.display = "block";

roastBox.scrollIntoView({
    behavior: "smooth",
    block: "center"
});
await wait(2200);

const damageMeme = document.getElementById("damageMeme");
const damageSound = document.getElementById("damageSound");

damageMeme.style.display = "block";

damageMeme.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

if (damageSound) {
    damageSound.currentTime = 0;
    damageSound.play().catch(function () {});
}

await wait(3200);

roastBox.style.display = "none";
damageMeme.style.display = "none";

const correctionBox = document.getElementById("correctionBox");

correctionBox.style.display = "block";

correctionBox.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

await wait(4000);

correctionBox.innerHTML += `
    <br><br>
    <button id="continueJourney">
        💜 Continue Journey
    </button>
`;

document.getElementById("continueJourney").addEventListener("click", function () {

   openPageWithMusic("birthday.html");

    // Kal yahan gallery page ya next page open karenge.
    // Example:
    // window.location.href = "gallery.html";

});
});
        }, 1200);

    };
function startMusicAndOpen() {

    const music = document.getElementById("bgMusic");

    if (music) {

        music.volume = 0.10;

        music.play().then(function () {

            sessionStorage.setItem("musicStarted", "yes");

            setTimeout(function () {

                sessionStorage.setItem(
                    "musicTime",
                    music.currentTime
                );

                window.location.href = "pages/verification.html";

            }, 1000);

        }).catch(function (error) {

            console.log(error);

            window.location.href = "pages/verification.html";

        });

    }

}
const startJourneyBtn = document.getElementById("startJourneyBtn");

if (startJourneyBtn) {

    startJourneyBtn.addEventListener("click", function () {

       window.location.href = "letter.html";

    });

}
function getBackgroundMusic() {
    return document.getElementById("bgMusic");
}

function saveMusicState() {
    const music = getBackgroundMusic();

    if (!music) return;

    sessionStorage.setItem("musicTime", String(music.currentTime));
}

async function resumeBackgroundMusic() {
    const music = getBackgroundMusic();

    if (!music) return;

    music.volume = 0.10;

    const savedTime = Number(
        sessionStorage.getItem("musicTime") || 0
    );

    if (Number.isFinite(savedTime)) {
        music.currentTime = savedTime;
    }

    if (sessionStorage.getItem("musicStarted") === "yes") {
        try {
            await music.play();
        } catch (error) {
            // Browser block kare to next click par resume hoga.
            document.addEventListener(
                "click",
                function resumeOnClick() {
                    music.play().catch(function () {});
                },
                { once: true }
            );
        }
    }
}

async function startMusicAndOpen() {
    const music = getBackgroundMusic();

    if (music) {
        music.volume = 0.10;

        try {
            await music.play();

            sessionStorage.setItem("musicStarted", "yes");
            saveMusicState();
        } catch (error) {
            console.log("Music start blocked:", error);
        }
    }

    window.location.href = "pages/verification.html";
}

function openPageWithMusic(pageUrl) {
    saveMusicState();
    window.location.href = pageUrl;
}

document.addEventListener("DOMContentLoaded", function () {
    resumeBackgroundMusic();

    setInterval(function () {
        saveMusicState();
    }, 500);
});

window.addEventListener("beforeunload", function () {
    saveMusicState();
});

const openLetterBtn = document.getElementById("openLetterBtn");
const envelope = document.querySelector(".envelope");
const letterText = document.getElementById("letterText");
const letterContinueBtn = document.getElementById("letterContinueBtn");

const finalLetter = `Dear Moti,

Happy Birthday! 🥳

Sabse pehle thank you... kyunki agar tu meri behen na hoti to shayad mujhe itni free ki daant, taane aur orders kabhi experience hi na hote. 😂

Tu sirf 2 saal badi hai, lekin hukum aise chalati hai jaise ghar ki CEO ho. "Ye utha", "Wo le aa", "Paani bhar de"... aur agar mana kar do to aisi shakal banati hai jaise maine croron ka nuksaan kar diya ho.

Homework mein help bhi karti hai... lekin free mein? Bilkul nahi! 😂 Pehle deal hoti hai—"Kuch khila de", tab jaake madam ka dimaag start hota hai.

Aur Rakhi ke din... us din to bhaiisaab tu to officially Income Tax Department ban jaati hai. Mujhse gift, Shaurya se gift, Papa se paise... lagta hai Rakhi nahi, annual budget session chal raha hota hai. 😂

Waise maine socha tha is letter mein teri tareef bhi likh du... phir yaad aaya ki Papa ne bola tha ki jhooth bolna achhi baat nahi hoti. 😌

Lekin ek baat maan ni padegi... ghar mein sabse zyada awaaz bhi teri hi hoti hai aur sabse zyada drame bhi tere hi hote h. Aur pata nahi kaise, sabko uski aadat bhi ho gayi hai. 😂

Chalo ab zyada khush mat ho. Ye website aur gift mil gaya matlab agle 5 saal tak birthday gift ki demand mat kario. Isko advance booking maan le. 😎

Happy Birthday, Moti!

— Tera pareshan bhai, Aryan 😂💜

P.S. Agar itna sab dekhne ke baad bhi tu mujhe pareshaan karegi... to agle saal sirf WhatsApp pe "HBD" milega. 😌😂`;

if (openLetterBtn && envelope && letterText && letterContinueBtn) {

    openLetterBtn.addEventListener("click", async function () {

        openLetterBtn.style.display = "none";
        envelope.classList.add("opened");

        await wait(900);

        letterText.textContent = "";

        for (const character of finalLetter) {
            letterText.textContent += character;
            await wait(12);
        }

        letterContinueBtn.style.display = "block";

    });

}
letterContinueBtn.addEventListener("click", function () {
    window.location.href = "gallery.html";
});

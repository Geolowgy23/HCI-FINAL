const stories = [
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2022/09/Dosnoventa_Maharishi-1500x755-1.jpg",
        title: "DOSNOVENTA®<br>THE UNSEEN PATH™",
        date: "JANUARY 2025",
        description: "A LIMITED EDITION OF THE DOSNOVENTA® FULL-CARBON TOKYO FRAME"
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2021/12/Dosnoventa_Mario_Cover.png",
        title: "DOSNOVENTA®<br>YOKOHAMA DOG DAYS",
        date: "NOVEMBER 2024",
        description: "IDLE DAYS AROUND YOKOHAMA, CAPTURED THROUGH THE LENS OF LUCAS MONNE."
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2021/05/Dosnoventa_Paris_00-1-scaled-1500x754_Cover_2.jpg",
        title: "NINEPOINTNINE<br>X DOSNOVENTA®",
        date: "APRIL 2024",
        description: ""
    },
    {
        image: "https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/486663168_2524960224504457_6322229008671581093_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHU-HF9m7SBSI4rJNK47dBYChAlW142sYoKECVbXjaxihoFFQky-aecnxtEanBV-HQ1BiHuuwvcFQh5QkSm5sZs&_nc_ohc=TdISg-jf_4YQ7kNvwHToQQG&_nc_oc=AdlHOz7PRQa9ONWP-4kZnDotDoGTy90c-dgeDKiZzsayLt5Lz1rTr8D0nRjsoW2eyyUvupZ-qK-a58HL3v9YWc3u&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=hL4ELG_4FeVDxjcDrKOIYQ&oh=00_AfH17o3ZRadHe8bIAZvdMh7A6aRc39N-VMvGFQIAEtFvRw&oe=6816A46D",
        title: "CERVELO®<br>RED AERO™",
        date: "FEBRUARY 2023",
        description: "A PIC OF GEO ALGUSAR RIDING A BIKE IN DGT."
    }
];

function loadStories() {
    const storiesContainer = document.getElementById("stories-list");
    storiesContainer.innerHTML = "";

    stories.forEach(story => {
        const storyCard = document.createElement("div");
        storyCard.classList.add("story-card");

        storyCard.innerHTML = `
            <img src="${story.image}" alt="${story.title}">
            <div class="story-text">
                <h3>${story.title}</h3>
                <p>${story.date}</p>
                ${story.description ? `<p>${story.description}</p>` : ""}
            </div>
        `;

        storiesContainer.appendChild(storyCard);
    });
}

document.addEventListener("DOMContentLoaded", loadStories);

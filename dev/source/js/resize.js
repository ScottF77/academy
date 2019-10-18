if (ResizeObserver) {
    console.log('Resize Observer is present');

    const imageSection = document.querySelector('.imageContainer');

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const img = entry.target.querySelector('.image');
            const imgSmall = img.dataset.imgsrcSmall;
            const imgMedium = img.dataset.imgsrcMedium;
            const imgLarge = img.dataset.imgsrcLarge;

            if (entry.contentBoxSize) {
                console.log('has contentBoxSize');
            } else {
                console.log('no contentBoxSize');
                //or entry.target.clientWidth
                const width = entry.contentRect.width;

                if (width < 479) {
                    entry.target.style.opacity = 0.2;

                    const imageShouldChange = img.src !== imgSmall;

                    if (imageShouldChange) {
                        img.src = imgSmall;
                    }

                    return;
                }

                if (width > 480 && width < 767) {
                    entry.target.style.opacity = 0.4;

                    const imageShouldChange = img.src !== imgMedium;

                    if (imageShouldChange) {
                        img.src = imgMedium;
                    }

                    return;
                }

                if (width > 768 && width < 991) {
                    entry.target.style.opacity = 0.6;

                    const imageShouldChange = img.src !== imgLarge;

                    if (imageShouldChange) {
                        img.src = imgLarge;
                    }

                    return;
                }

                if (width >= 992) {
                    entry.target.style.opacity = 0.8;

                    const imageShouldChange = img.src !== imgLarge;

                    if (imageShouldChange) {
                        img.src = imgLarge;
                    }

                    return;
                }
            }
        }
    });

    resizeObserver.observe(imageSection);

    // images all x1 res
    // base - http://localhost:6700/content/dam/www/rch/RaiffeisenCasa/3840x980_wohnzimmer_klein.jpg.transform/w1200/image.jpg
    // max-width 768 - http://localhost:6700/content/dam/www/rch/RaiffeisenCasa/3840x980_wohnzimmer_klein.jpg.transform/w480/image.jpg
    // min-width 768 max width 1200 - http://localhost:6700/content/dam/www/rch/RaiffeisenCasa/3840x980_wohnzimmer_klein.jpg.transform/w768/image.jpg
    // min-width 1200 - http://localhost:6700/content/dam/www/rch/RaiffeisenCasa/3840x980_wohnzimmer_klein.jpg.transform/w1200/image.jpg

}

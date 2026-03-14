// ===== ДАННЫЕ =====

// Треки (замени пути на свои файлы в папке audio/)
const tracks = [
    {
        file: 'audio/song1.mp3',
        title: 'Меня всегда тянет к тебе',
        subtitle: 'Гравитация',
        cover: 'images/cover1.jpg',
        duration: '3:45'
    },
    {
        file: 'audio/song2.mp3',
        title: 'Нон стоп',
        subtitle: 'Гравитация',
        cover: 'images/cover2.jpg',
        duration: '1:48'
    },
    {
        file: 'audio/song3.mp3',
        title: 'Рядом С Тобой',
        subtitle: 'Гравитация',
        cover: 'images/cover3.jpg',
        duration: '2:15'
    },
    {
        file: 'audio/song4.mp3',
        title: 'Лучшая девочка',
        subtitle: 'Гравитация',
        cover: 'images/cover4.jpg',
        duration: '2:15'
    },
    {
        file: 'audio/song5.mp3',
        title: 'Какая? -ЛЮБИМАЯ',
        subtitle: 'Гравитация',
        cover: 'images/cover5.jpg',
        duration: '2:56'
    },
    {
        file: 'audio/song6.mp3',
        title: 'Моя Мечта',
        subtitle: 'Гравитация',
        cover: 'images/cover6.jpg',
        duration: '3:45'
    },
    {
        file: 'audio/song7.mp3',
        title: 'Только МОЯ хулиганка',
        subtitle: 'Гравитация',
        cover: 'images/cover7.jpg',
        duration: '3:10'
    },
    {
        file: 'audio/song8.mp3',
        title: 'Небо даст нам шанс',
        subtitle: 'Гравитация',
        cover: 'images/cover8.jpg',
        duration: '2:19'
    },
    {
        file: 'audio/song9.mp3',
        title: 'ZEN',
        subtitle: 'Гравитация',
        cover: 'images/cover9.jpg',
        duration: '3:30'
    },
    {
        file: 'audio/song10.mp3',
        title: 'Мастер и Оксана',
        subtitle: 'Гравитация',
        cover: 'images/cover10.jpg',
        duration: '4:10'
    }
];

// 16 фотографий (замени пути на свои файлы в папке images/)
const photos = [
    { img: 'images/photo1.jpg', caption: 'Наше первое "мы" ☕', date: 'Моему цыпленку' },
    { img: 'images/photo2.jpg', caption: 'Объятия, в которых хочется раствориться 🌸', date: 'Моей зайке' },
    { img: 'images/photo3.jpg', caption: 'Вкус наших первых поцелуев 💋', date: 'Самой дикой кошечке' },
    { img: 'images/photo4.jpg', caption: 'Губы, которые сводят с ума 👄', date: 'Любимой милашке' },
    { img: 'images/photo5.jpg', caption: 'Тот самый первый раз 🔥', date: 'Самой обоятельной красотульке' },
    { img: 'images/photo6.jpg', caption: 'Наше маленькое приключение 💕', date: 'Ты моя жемчужина' },
    { img: 'images/photo7.jpg', caption: 'Дорога, с которой всё началось 🛣️', date: 'Неповторимая' },
    { img: 'images/photo8.jpg', caption: 'Двое в городе миллионов 🌃', date: 'Моя вечная любовь' },
    { img: 'images/photo9.jpg', caption: 'Фейерверк наших чувств 🎆', date: 'Моя бусинка' },
    { img: 'images/photo10.jpg', caption: 'Наша первая "взрослая" жизнь 🏙️', date: 'Самая яркая звездочка' },
    { img: 'images/photo11.jpg', caption: 'Уют, сотканный из нас 🕯️', date: 'Мой ангелок' },
    { img: 'images/photo12.jpg', caption: 'Город засыпает, просыпаемся мы 🌙', date: 'Иголка в стоге сена' },
    { img: 'images/photo13.jpg', caption: 'Там, где небо встречается с водой ⛵', date: 'Незаменимая' },
    { img: 'images/photo14.jpg', caption: 'Мой страх и моё спасение 🤍', date: 'Самая удивительная на свете' },
    { img: 'images/photo15.jpg', caption: 'Выше только любовь 🏔️', date: 'Мое заветное желание' },
    { img: 'images/photo16.jpg', caption: 'Наша бесконечность ♾️', date: 'Всегда и на вечность' }
];

// Тайные послания
const secrets = [
    "В мире есть миллионы звёзд, но я нашёл свою единственную. Ты — мой свет в темноте... ✨",
    "Каждый день с тобой — это подарок. Я бы выбрал тебя снова и снова... 💫",
    "Ты не представляешь, как сильно ты вдохновляешь меня. Спасибо, что ты есть... 🌟",
    "Я храню каждое наше воспоминание как сокровище. Это моя самая ценная коллекция... 💎",
    "Неважно, что будет завтра. Важно, что сегодня я рядом с тобой... 🤝"
];

// Личные сообщения для каждой фотографии
const photoMessages = [
    "Помнишь этот день? Ты впервые показала меня всему миру, будто сказала: 'Смотрите, это моё счастье'. Спасибо, что выбрала меня тогда и выбираешь до сих пор...",
    "Этот день ты наполнила радостью и уютом, подарила мне объятия, в которых хочется раствориться без остатка. Никогда не переставай быть тем самым тёплым светом, который согревает меня изнутри...",
    "Никогда не забуду то время, когда мы могли целоваться часами, забыв о целом мире. Давай никогда не разучимся этому. Пусть наши чувства не угасают, а с каждым днём разгораются всё сильнее...",
    "Те летние вечера навсегда останутся в моей памяти как лучшие страницы нашей истории. Твой смех, твоя улыбка, твои глаза - они сделали то лето бесконечным. Спасибо тебе, моя любовь, за эти мгновения...",
    "Помнишь наши первые ночи на даче? Ты, я, звёзды и чувство, что мы единственные люди на земле. Наши прогулки, наш смех, наше время — оно всегда будет отзываться в моём сердце самой тёплой нотой...",
    "Наше первое маленькое путешествие. Мы просто катались и были счастливы просто быть рядом. Ты - причина моих самых искренних улыбок, и в тот день я улыбался как никогда в жизни...",
    "Наша первая настоящая поездка. Помню ту маленькую кафешку, где я сидел и не мог поверить, что ты рядом. Помню, как мы замёрзли, но не могли разжать руки, потому что твоё тепло стало необходимее воздуха. Я хочу держать твою руку вечность. И даже больше...",
    "Тот город мне не особо понравился, знаешь. Слишком шумно, слишком суетливо. Но твои глаза... они сделали его самым красивым местом на земле. То кольцо, что ты носишь, будет вечным напоминанием: моя любовь будет жить столько же, сколько оно будет на твоём пальце. А я сделаю так, чтобы ты никогда его не снимала...",
    "Салют в тот вечер был красивый, но мерк на фоне тебя. Это больше чем просто фейерверк - это символ наших чувств. Такие же яркие, такие же взрывные, такие же прекрасные. Ты — мой самый главный огонёк в этой жизни, никогда не переставай гореть...",
    "Мы снова вернулись в большой город, но всё было иначе. Мы были только вдвоём, и этот город вдруг стал нашим маленьким миром. Просыпаться с тобой, засыпать с тобой, ходить по магазинам, готовить завтрак, гулять и целоваться без повода — это было идеально. Я так жду момента, когда это будет не неделей, а целой жизнью...",
    "Наши совместные ужины, просмотры фильмов и сериалов перед сном. Все это было незабываемо. То как ты засыпала, как ты спала на всю кровать, ты была звездочкой даже тогда, оставайся всегда моей звездой, которая всегда укажет мне путь ...",
    "Знаешь, все эти клубы, бары, тусовки — всё это пыль. Ничто не сравнится с вечером, когда ты просто рядом. Когда ты смеёшься, когда рассказываешь что-то, когда молчишь. С тобой время замирает, и я снова чувствую себя ребёнком, для которого весь мир сосредоточен в одном человеке. Оставайся со мной всегда. Будь моей машиной времени, моим порталом в вечность...",
    "Море, лодка, закат... И ты. Больше ничего не существует. В тот момент я понял, что однажды украду тебя у целого мира. Посажу в лодку, и мы уплывём туда, где будем только вдвоём. Где твоя улыбка будет принадлежать только мне. Смейся чаще, пожалуйста. Твой смех делает этот мир лучше...",
    "Этот день был соткан из противоречий. С одной стороны — неописуемая красота того, что мы делали. С другой - ледяной страх, сковывающий изнутри. Но ты была рядом. Твоя рука в моей руке, твоё тепло, твой шёпот — они оказались сильнее любого страха. Будь всегда моим успокоением, моей тихой гаванью, моим 'всё будет хорошо'...",
    "Наш последний день в Питере. Мы всё-таки забрались на ту башню, чтобы увидеть город с высоты. Но знаешь, что я понял, глядя вниз? Что нет ничего прекраснее тебя. Ни этот город, ни эта высота, ни весь мир — ничто не сравнится с тобой. Ты была самым красивым, что я видел в тот день...",
    "Ты — самый главный подарок в моей жизни. И знаешь, что самое прекрасное? Это только начало. Наша история только пишется. Впереди тысячи таких же дней, тысячи моментов, тысячи 'я тебя люблю'. Спасибо, что ты есть. Спасибо, что ты моя. Навсегда. Навечность..."
];

// ===== СОСТОЯНИЕ =====
let currentTrackIndex = 0;
let isPlaying = false;
let progressInterval;
let currentlyTyping = null;
let touchStartTime = 0;
let nextAudio = new Audio(); // Для предзагрузки следующего трека

// ===== ЭЛЕМЕНТЫ =====
const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');

// ===== ИНИЦИАЛИЗАЦИЯ =====

function init() {
    loadTrack(0);
    createPhotoRibbon();
    setupTouchEvents();
    setupSwipe();
    createStars();
}

// ===== ТАЧ-СОБЫТИЯ =====

function setupTouchEvents() {
    document.addEventListener('touchstart', function(e) {
        touchStartTime = Date.now();
    });

    document.addEventListener('touchend', function(e) {
        if (Date.now() - touchStartTime > 200) {
            e.preventDefault();
        }
    });
}

// ===== СВАЙП ДЛЯ ПЛЕЕРА =====

function setupSwipe() {
    const cover = document.getElementById('cover');
    if (!cover) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    cover.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    cover.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                changeTrack(1);
            } else {
                changeTrack(-1);
            }
        }
    }, { passive: true });
}

// ===== СОЗДАНИЕ ФОТОЛЕНТЫ =====

function createPhotoRibbon() {
    const ribbon = document.getElementById('photo-ribbon');
    if (!ribbon) return;
    
    ribbon.innerHTML = '';
    
    photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;
        card.dataset.flipped = 'false';
        card.style.setProperty('--rotation', `${(index % 2 === 0 ? -2 : 2)}deg`);
        
        const frontDiv = document.createElement('div');
        frontDiv.className = 'photo-front';
        frontDiv.innerHTML = `
            <div class="tape"></div>
            <img data-src="${photo.img}" class="photo-img lazy" alt="${photo.caption}" 
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23FFB6C1'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23ffffff' font-size='24' font-family='Arial'%3EЗагрузка...%3C/text%3E%3C/svg%3E"
                 onerror="this.src='https://via.placeholder.com/400/FFB6C1/FFFFFF?text=Photo+${index+1}'">
            <div class="photo-caption">${photo.caption}</div>
            <div class="photo-date">${photo.date}</div>
        `;
        
        const backDiv = document.createElement('div');
        backDiv.className = 'photo-back';
        backDiv.innerHTML = `
            <div class="back-content">
                <h4>💌 Тайное послание</h4>
                <div class="back-message" id="message-${index}"></div>
                <div class="back-date">${photo.date}</div>
            </div>
        `;
        
        card.appendChild(frontDiv);
        card.appendChild(backDiv);
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handlePhotoClick(this, index, photoMessages[index % photoMessages.length]);
        });
        
        ribbon.appendChild(card);
    });
    
    setTimeout(setupLazyLoading, 100);
}

// ===== ЛЕНИВАЯ ЗАГРУЗКА ФОТО =====

function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                }
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px 0px',
        threshold: 0.01
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
    
    console.log('Ленивая загрузка запущена для', document.querySelectorAll('img.lazy').length, 'фото');
}

// ===== ПЕРЕВОРОТ ФОТО =====

function handlePhotoClick(card, index, message) {
    if (card.classList.contains('animating')) {
        return;
    }
    
    card.classList.add('animating');
    const isFlipped = card.classList.contains('flipped');
    
    if (isFlipped) {
        card.classList.remove('flipped');
        card.dataset.flipped = 'false';
        
        if (currentlyTyping === index) {
            const messageEl = document.getElementById(`message-${index}`);
            if (messageEl) {
                messageEl.classList.remove('typing');
                messageEl.style.borderRight = 'none';
                messageEl.textContent = '';
            }
            currentlyTyping = null;
        }
        
        setTimeout(() => {
            card.classList.remove('animating');
        }, 600);
        
    } else {
        card.classList.add('flipped');
        card.dataset.flipped = 'true';
        
        setTimeout(() => {
            typeMessage(index, message);
        }, 300);
        
        setTimeout(() => {
            card.classList.remove('animating');
        }, 600);
    }
}

function typeMessage(index, message) {
    const messageEl = document.getElementById(`message-${index}`);
    if (!messageEl) return;
    
    if (currentlyTyping === index) {
        return;
    }
    
    if (currentlyTyping !== null) {
        const oldMessageEl = document.getElementById(`message-${currentlyTyping}`);
        if (oldMessageEl) {
            oldMessageEl.classList.remove('typing');
            oldMessageEl.style.borderRight = 'none';
        }
    }
    
    messageEl.textContent = '';
    messageEl.classList.add('typing');
    currentlyTyping = index;
    
    let i = 0;
    
    function type() {
        if (i < message.length) {
            messageEl.textContent += message.charAt(i);
            i++;
            setTimeout(type, 40);
        } else {
            messageEl.classList.remove('typing');
            messageEl.style.borderRight = 'none';
            
            if (currentlyTyping === index) {
                currentlyTyping = null;
            }
        }
    }
    
    type();
}

function resetAllFlipped() {
    document.querySelectorAll('.photo-card.flipped').forEach(card => {
        card.classList.remove('flipped');
        card.dataset.flipped = 'false';
        card.classList.remove('animating');
    });
    
    document.querySelectorAll('.back-message').forEach(el => {
        el.classList.remove('typing');
        el.style.borderRight = 'none';
        el.textContent = '';
    });
    
    currentlyTyping = null;
}

// ===== ПЛЕЕР =====

function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[index];
    
    audio.src = track.file;
    document.getElementById('track-title').textContent = track.title;
    document.getElementById('track-subtitle').textContent = track.subtitle;
    document.getElementById('cover-img').src = track.cover;
    totalTimeEl.textContent = track.duration;
    
    audio.onended = () => {
        changeTrack(1);
    };
    
    // Предзагружаем следующий трек
    preloadNextTrack();
}

function preloadNextTrack() {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    const nextTrack = tracks[nextIndex];
    
    nextAudio.src = nextTrack.file;
    nextAudio.preload = 'metadata';
    
    // Если интернет хороший, начинаем грузить полностью
    if (navigator.connection && navigator.connection.downlink > 1) {
        setTimeout(() => {
            nextAudio.preload = 'auto';
        }, 3000);
    }
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playBtn.innerHTML = '▶';
        document.getElementById('cover').classList.remove('playing');
        clearInterval(progressInterval);
    } else {
        audio.play().catch(e => console.log('Audio play failed:', e));
        isPlaying = true;
        playBtn.innerHTML = '⏸';
        document.getElementById('cover').classList.add('playing');
        startProgress();
    }
}

function changeTrack(direction) {
    const newIndex = currentTrackIndex + direction;
    
    if (newIndex < 0) {
        loadTrack(tracks.length - 1);
    } else if (newIndex >= tracks.length) {
        loadTrack(0);
    } else {
        loadTrack(newIndex);
    }
    
    if (isPlaying) {
        audio.play().catch(e => console.log('Audio play failed:', e));
        startProgress();
    }
    
    updateProgress();
}

function startProgress() {
    clearInterval(progressInterval);
    progressInterval = setInterval(() => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = percent + '%';
            
            const mins = Math.floor(audio.currentTime / 60);
            const secs = Math.floor(audio.currentTime % 60);
            currentTimeEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        }
    }, 100);
}

function updateProgress() {
    progressBar.style.width = '0%';
    currentTimeEl.textContent = '0:00';
}

function seekTrack(e) {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    let clientX;
    
    if (e.touches) {
        clientX = e.touches[0].clientX;
    } else {
        clientX = e.clientX;
    }
    
    const percent = (clientX - rect.left) / rect.width;
    
    if (audio.duration) {
        audio.currentTime = percent * audio.duration;
        progressBar.style.width = (percent * 100) + '%';
    }
}

// ===== ИНТЕРФЕЙС =====

function startExperience() {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    
    intro.style.opacity = '0';
    intro.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        intro.style.display = 'none';
        mainContent.classList.add('active');
        togglePlay();
        setupObservers();
        setupLazyLoading();
    }, 500);
}

function setupObservers() {
    const titleObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.3 });
    
    const galleryTitle = document.querySelector('.gallery-title');
    if (galleryTitle) {
        titleObs.observe(galleryTitle);
    }
    
    const photoObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.photo-card').forEach(card => photoObs.observe(card));
    
    const finalObs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            typeFinal();
        }
    }, { threshold: 0.5 });
    
    const finalSection = document.getElementById('final');
    if (finalSection) {
        finalObs.observe(finalSection);
    }
}

function typeFinal() {
    const el = document.getElementById('final-message');
    if (!el || el.textContent) return;
    
    const text = 'С днём рождения, моя любовь! Ты — мелодия моего сердца, которую я хочу слушать вечно... Наш плейлист только начинается! 💕';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }
    type();
}

// ===== ТАЙНОЕ ПОСЛАНИЕ =====

function showSecret() {
    const modal = document.getElementById('secret-modal');
    const textEl = document.getElementById('secret-text');
    
    if (!modal || !textEl) return;
    
    textEl.textContent = secrets[Math.floor(Math.random() * secrets.length)];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSecret(e) {
    const modal = document.getElementById('secret-modal');
    
    if (e.target === e.currentTarget) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeSecretButton(e) {
    e.stopPropagation();
    const modal = document.getElementById('secret-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== ПЕРЕЗАПУСК =====

function restartFromBeginning() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playBtn.innerHTML = '▶';
    document.getElementById('cover').classList.remove('playing');
    clearInterval(progressInterval);
    
    loadTrack(0);
    updateProgress();
    
    resetAllFlipped();
    
    document.querySelectorAll('.photo-card').forEach(card => {
        card.classList.remove('visible');
        card.classList.remove('animating');
    });
    
    setTimeout(() => setupObservers(), 800);
    
    const finalMessage = document.getElementById('final-message');
    if (finalMessage) {
        finalMessage.textContent = '';
    }
    
    const modal = document.getElementById('secret-modal');
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
// ===== КОСМИЧЕСКИЙ ФОН =====

function createStars() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;
    
    // Очищаем контейнер
    starsContainer.innerHTML = '';
    
    const colors = ['#ffffff', '#ffb6c1', '#ff69b4', '#ff1493', '#9370db', '#e6e6fa'];
    
    // Создаем крупные звезды (30 штук)
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star-large';
        
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 3 + 3;
        const delay = Math.random() * 5;
        
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = left + '%';
        star.style.top = top + '%';
        star.style.backgroundColor = color;
        star.style.boxShadow = `0 0 ${size * 3}px ${color}`;
        star.style.animation = `twinkle-large ${duration}s ease-in-out ${delay}s infinite`;
        
        starsContainer.appendChild(star);
    }
    
    // Создаем мелкие звезды (150 штук)
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star-small';
        
        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 5;
        
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = left + '%';
        star.style.top = top + '%';
        star.style.backgroundColor = color;
        star.style.animation = `twinkle-small ${duration}s ease-in-out ${delay}s infinite`;
        
        starsContainer.appendChild(star);
    }
    
    // Создаем падающие звезды (5 штук)
    for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        const left = Math.random() * 70;
        const top = Math.random() * 30;
        const delay = Math.random() * 10;
        const duration = Math.random() * 4 + 4;
        
        shootingStar.style.left = left + '%';
        shootingStar.style.top = top + '%';
        shootingStar.style.animation = `shoot ${duration}s linear ${delay}s infinite`;
        
        starsContainer.appendChild(shootingStar);
    }
    
    console.log('✨ Создано звезд: 180 + 5 падающих');
}
// ===== ОБРАБОТКА РАЗМЕРА ЭКРАНА =====

let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        if (window.innerWidth <= 768) {
            // Специфичные для мобильных устройств adjustments
        }
    }, 250);
});

// Предотвращаем выделение текста при двойном тапе
document.addEventListener('touchstart', function(e) {
    if (e.target.classList.contains('photo-card')) {
        e.preventDefault();
    }
}, { passive: false });

// ===== ЗАПУСК =====
document.addEventListener('DOMContentLoaded', function() {
    init();
});
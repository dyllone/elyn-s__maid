document.addEventListener('DOMContentLoaded', () => {
    // 1. 장바구니(🛒) 클릭 시 알림
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            alert("아직 예비 하자품만 조회 및 구매 가능합니다.");
        });
    }

    // 2. 로그인(👤) 클릭 시 알림
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert("이미 로그인 중입니다.");
        });
    }

    // 3. 상품 카드 클릭 시 알림 (경고 후 페이지 이동은 HTML에서 처리됨)
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const nameTag = card.querySelector('h3');
            const name = nameTag ? nameTag.innerText : "개체";
            console.log(`[System] ${name} 데이터 접근 중...`);
        });
    });

    console.log("Elyn's Maid System: Security Protocol Active.");
});

// 4. 검색 필터 함수 (HTML의 onkeyup="filterProducts()"가 찾는 함수)
function filterProducts() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
    const filter = input.value.toUpperCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const title = card.querySelector('h3');
        if (title) {
            const textValue = title.innerText || title.textContent;
            // 검색어가 포함되어 있으면 표시, 없으면 숨김
            card.style.display = textValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    });

}

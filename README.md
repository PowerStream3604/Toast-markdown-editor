# Toast-markdown-editor
my custom version of toast editor
# Markdown 편집기

- 1. Bootstrap Markdown Editor

    특징 : 

    - preview, 이미지 업로드 및 기타 기능 지원
    - Bootstrap을 위한 마크다운 편집기
    - github markdown과 비슷한 기능(edit, preview 측면에서)

    Github: 

    [inacho/bootstrap-markdown-editor](https://github.com/inacho/bootstrap-markdown-editor)

    Demo:  

    [Bootstrap Markdown Editor](http://inacho.github.io/bootstrap-markdown-editor/)

    ![Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled.png](Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled.png)

- 2. JS-Markdown-Editor

    특징: 

    - 양쪽에서 (edit, preview)를 볼 수 있음
    - 문서 작성 시 필요한 최소한의 기능 제공
    - pc환경에서 문서할 때 적합

    Github : 

    [Grafikart/JS-Markdown-Editor](https://github.com/Grafikart/JS-Markdown-Editor)

    Demo : 

    [Markdown Editor](https://rawgit.com/Grafikart/JS-Markdown-Editor/master/dist/demo.html)

    ![Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%201.png](Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%201.png)

- 3. Woofmark

    특징:

    - 마크다운, html, WISIWYG 입력 모드 지원
    - 되돌리기, 다시하기 기능 지원
    - 스타일 전체가 customize 가능

    Github : 

    [](https://github.com/bevacqua/woofmark)

    Demo : 

    [woofmark](https://bevacqua.github.io/woofmark/)

    ![Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%202.png](Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%202.png)

- 4. Ckeditor5

    특징:

    - live preview가 가능
    - 다른 markdown editor 보다 많은 기능 지원

    Website:

    [Rich text editor of tomorrow | CKEditor 5](https://ckeditor.com/ckeditor-5/)

    Github:

    [ckeditor/ckeditor5](https://github.com/ckeditor/ckeditor5)

    Demo:

    [CKEditor 5 demo - A set of ready to use rich text editors created with a powerful framework](https://ckeditor.com/ckeditor-5/demo/)

- 5. Toast UI Editor

    **소개 :**

    텍스트 또는 WYSIWYG를 사용하여 마크다운 문서 편집기

    구문 강조 표시, 라이브 미리 보기 및 차트 기능이 함께 제공됨

    **특징 :**

    1. 구문 강조 표시
    2. 라이브 미리 보기
    3. 차트 기능
    4. NHN에서 만듦
    5. 오픈소스

    **license :** 

    **MIT** (해당 소프트웨어를 누구든지 무상으로 제한 없이 취급 가능)

    (단, 저작권 표시 및 허가 표시를 소프트웨어의 모든 복제물 또는 중요한 부분에 기재해야 함)

    Website & Demo:

    [TOAST UI](https://ui.toast.com/tui-editor)

    Github:

    [nhn/tui.editor](https://github.com/nhn/tui.editor)

**최종적으로 선택한 markdown editor**

:  Toast UI Editor

선택 이유

- 많은 기능들을 지원
- live preview가능
- 상업적으로 이용시에도 무료
- 깔끔한 디자인

- Toast UI 에게서 필요한것
    - 1.Insert Image popup에서 clipboard 탭이 하나더 필요

        **원래의 popup**

        ![Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%203.png](Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%203.png)

        2. customizing 후의 Insert Image 창

        **현재의 popup**

        ![Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%204.png](Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%204.png)

        3. 이미지 서버 업로드 로딩시 화면

        **loading progress 표시**

        ![Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%205.png](Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%205.png)

        4. 서버 업로드 작업

        기존의 **toast ui editor**는 **base64**형태로 이미지를 처리

        이는, 이미지 **랜더링**시 많은 부하 유발

        (따라서, 서버로 업로드 결정)

        — **업로드된 후 자동으로 url은 업로드된 경로로 변경됨** —

        ![Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%206.png](Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%206.png)

        5. 업로드 성공시

        **success!!** 

        prompt box 표시(animation)

        ![Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%207.png](Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%207.png)

        6. 업로드 실패시

        **failed!!**

        prompt box 표시(animation)

        ![Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%208.png](Markdown%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5%201b789ea75b8e4d53bb133026291e49bd/Untitled%208.png)

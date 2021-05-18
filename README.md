# Toast-markdown-editor
My custom version of Toast UI Editor

### 사용법 참고
[How to use](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/%EC%82%AC%EC%9A%A9%EB%B2%95.md)
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

    ![Bootstrap Markdown Editor](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/BootStrap%20markdown%20Editor.png)

- 2. JS-Markdown-Editor

    특징: 

    - 양쪽에서 (edit, preview)를 볼 수 있음
    - 문서 작성 시 필요한 최소한의 기능 제공
    - pc환경에서 문서할 때 적합

    Github : 

    [Grafikart/JS-Markdown-Editor](https://github.com/Grafikart/JS-Markdown-Editor)

    Demo : 

    [Markdown Editor](https://rawgit.com/Grafikart/JS-Markdown-Editor/master/dist/demo.html)

    ![JS-markdown-editor-file](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/JS-markdown-editor.png)

- 3. Woofmark

    특징:

    - 마크다운, html, WISIWYG 입력 모드 지원
    - 되돌리기, 다시하기 기능 지원
    - 스타일 전체가 customize 가능

    Github : 

    [](https://github.com/bevacqua/woofmark)

    Demo : 

    [woofmark](https://bevacqua.github.io/woofmark/)

    ![Woofmark-markdown-editor](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/Woofmark.png)

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

# 최종적으로 선택한 markdown editor

## Toast UI Editor

선택 이유

- 많은 기능들을 지원
- live preview가능
- 상업적으로 이용시에도 무료
- 깔끔한 디자인
- ajax를 사용 X 
#### 참고

**customization 후에도 ajax 사용 X** 
## 기존의 Toast UI에서 추가한 기능
### 이미지 관련 기능
1. Image Tab에서 ClipBoard tab 추가
- Clipboard에 복사한 이미지를 ` Ctrl + V ` 로 바로 업로드 가능
2. 기존의 base64인코딩으로 처리되던 image를 서버로 업로드
3. 이미지 업로드시 loading progress 표시
4. 이미지 성공 여부에 따른 prompt box 표시

### 링크 관련 기능
1. Link tab에서 Target 관련 CheckBox 추가
- CheckBox 클릭 시 링크가 새로운 탭에서 열린다
2. `{target='_blank'}` 관련한 markdown 문법 지원

### 이미지 관련 
  - 1.Insert Image popup에서 clipboard 탭이 하나더 필요

      **원래의 popup**

      ![원래의-popup](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/%EC%9B%90%EB%9E%98%EC%9D%98%20popup.png)

      2. customizing 후의 Insert Image 창

      **현재의 popup**

      ![현재의 popup](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/%ED%98%84%EC%9E%AC%EC%9D%98%20popup.png)

      3. 이미지 서버 업로드 로딩시 화면

      **loading progress 표시**

      ![image loading progress](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/image%20upload%20loading%20progress%20%ED%91%9C%EC%8B%9C.png)

      4. 서버 업로드 작업

      기존의 **toast ui editor**는 **base64**형태로 이미지를 처리

      이는, 이미지 **랜더링**시 많은 부하 유발

      (따라서, 서버로 업로드 결정)

      — **업로드된 후 자동으로 url은 업로드된 경로로 변경됨** —

      ![서버업로드 작업](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EC%84%9C%EB%B2%84%20%EC%97%85%EB%A1%9C%EB%93%9C.png)

      5. 업로드 성공시

      **success!!** 

      prompt box 표시(animation)

      ![success prompt](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/image%20upload%20success%20prompt.gif)

      6. 업로드 실패시

      **failed!!**

      prompt box 표시(animation)

      ![fail prompt](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/image%20upload%20fail%20prompt.png)
      
      ### 링크 관련
      
      1. Target 속성에 New Window checkbox 추가
      
      ![link new window checkbox](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/link%20%EA%B4%80%EB%A0%A8%20tab.png)
      
      2. `New Window` checkbox 클릭시 `{target='_blank'}` 추가됨
      
      ![target blank image](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/link%20target%20_blank%20image.png)
      
      3. 실질적으로 html 태그에 `target='_blank'` 라는 속성 자동으로 추가됨

      ![html blank attribute added](https://github.com/PowerStream3604/Toast-markdown-editor/blob/main/markdownEditorPictures/link%20html%20target%20blank.png)

/*
 * Copyright 2012-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function decorateUIControls(container) {
    $(".chzn-select", $(container)).chosen({allow_single_deselect: true});

    $("select, input:checkbox, input:radio, input:file", $(container)).uniform();

    $(".input-date", $(container)).mask("9999-99-99");

    $(".input-date", $(container)).datepicker({
        autoSize: true,
//        appendText: '(YYYY-MM-DD)',
        dateFormat: 'yy-mm-dd'
    });

    $( '.timepicker' ).timeEntry( {
        show24Hours: true, // 24 hours format
        showSeconds: true, // Show seconds?
        spinnerImage: ApplicationConfig.BASE_URL + 'images/ui/spinnerUpDown.png', // Arrows image
        spinnerSize: [17, 26, 0], // Image size
        spinnerIncDecOnly: true // Only up and down arrows
    } );
}

function formViewVisualDecoration(container) {
    decorateUIControls(container);

    tinymce.init({
        selector: ".wysiwyg",
        language: "ru",
        menubar: "edit insert view format table tools",
        plugins: [
            "advlist autolink lists link charmap preview",
            "searchreplace visualblocks code fullscreen",
            "table contextmenu paste"
        ],
        style_formats: [
            {title: 'Заголовок', block: 'h3'}
        ],
        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link"
    });
}

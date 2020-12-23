$(() => {
    $("#text_input").dxTextArea({
        value: "",
        width: "100%",
        height: "290px",
        placeholder: "pass your message here"
    });
    $("#tags").dxTagBox({
        value: "",
        width: "100%",
        placeholder: "",
        dataSource: [
            "tag1",
            "tag2",
            "tag3",
        ],
        buttons: [
            "dropDown", {
                name: "checkText",
                location: "after",
                options: {
                    text: "check",
                    stylingMode: "text",
                    elementAttr: {
                        class: "check-button"
                    },
                    onClick: (e) => {
                        text = $("#text_input").dxTextArea("option", "value");

                        fetch('/check_text', {
                                method: 'POST',
                                body: JSON.stringify({
                                    text
                                }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            .then((response) => {
                                return response.json();
                            })
                            .then((data) => {
                                $("#tags").dxTagBox("instance").option("value", data);
                            });

                        DevExpress.ui.notify("Text was send to check.", "info");
                    }
                }
            }
        ]
    });
})
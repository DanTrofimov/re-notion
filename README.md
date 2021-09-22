# project-model

[Technical Requirements of the project](https://docs.google.com/document/d/1eFKIuPy_Zg02rr2sVhSVjHxXhM2JfA3dIwU1fBrOIuo/edit)

```json
{
    app: {
        sidebar: {
            appLogo,
            notesTree: {
                note: {
                    title,
                    uri,
                    parentNote: {
                        title,
                        uri,
                        parentNode: {
                            ...
                        }
                    }
                }
            }
        },
        main: {
            actionsPanel :{
                editButton,
                deleteButton,
                cancelButton
            },
            currentNote: {
                title,
                uri,
                parentNote: {
                    ...
                }
                noteContent: {
                    type,
                    value
                }
            }
        }
    }
}
```
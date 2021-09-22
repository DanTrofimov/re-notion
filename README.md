# project-model
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
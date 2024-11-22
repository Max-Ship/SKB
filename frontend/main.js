(function () {

    document.addEventListener("DOMContentLoaded", function () {

        function createdIndicatorLoadedWT() {
            const wrapIndicator = document.createElement("div");
            wrapIndicator.classList.add("indicator-wrap-transparate");
            const loader = document.createElement("div");
            loader.classList.add("loader");
            wrapIndicator.append(loader);
            return { wrapIndicator };
        }

        const loadIndicatorWT = createdIndicatorLoadedWT();

        function createdModalFormAddClient() {
            const modalWrap = document.createElement("div");
            modalWrap.classList.add("modal__wrap");

            const modalForm = document.createElement("form");
            modalForm.classList.add("modal__form");
            modalForm.id = "modal__form";

            const modalTitle = document.createElement("h2");
            modalTitle.classList.add("modal__title");
            modalTitle.textContent = "Новый клиент";

            const modalWrapForSurname = document.createElement("div");
            const modalWrapForName = document.createElement("div");
            const modalWrapForLastname = document.createElement("div");
            modalWrapForSurname.classList.add("wrap-input");
            modalWrapForName.classList.add("wrap-input");
            modalWrapForLastname.classList.add("wrap-input");

            const elemForLabelSurname = document.createElement("span");
            elemForLabelSurname.classList.add("modal__label-elem");
            elemForLabelSurname.textContent = "*";
            const elemForLabelName = document.createElement("span");
            elemForLabelName.classList.add("modal__label-elem");
            elemForLabelName.textContent = "*";
            const wrapInputSurname = document.createElement("label");
            wrapInputSurname.classList.add("modal__wrap-input-form");
            const wrapInputName = document.createElement("label");
            wrapInputName.classList.add("modal__wrap-input-form");
            const wrapInputLastname = document.createElement("label");
            wrapInputLastname.classList.add("modal__wrap-input-form");

            const inputSurname = document.createElement("input");
            inputSurname.id = "surname";
            inputSurname.classList.add("modal__input");
            const inputName = document.createElement("input");
            inputName.id = "name";
            inputName.classList.add("modal__input");
            const inputLastname = document.createElement("input");
            inputLastname.id = "lastname";
            inputLastname.classList.add("modal__input");

            wrapInputSurname.append("Фамилия", elemForLabelSurname);
            wrapInputName.append("Имя", elemForLabelName);
            wrapInputLastname.append("Отчество");
            modalWrapForSurname.append(inputSurname, wrapInputSurname);
            modalWrapForName.append(inputName, wrapInputName);
            modalWrapForLastname.append(inputLastname, wrapInputLastname);

            const wrapInputContacts = document.createElement("div");
            wrapInputContacts.id = "dataInputContact"
            wrapInputContacts.classList.add("modal__wrap-input-contact");

            const buttonClose = document.createElement("button");
            buttonClose.classList.add("modal__button-close");
            buttonClose.type = "button";
            buttonClose.addEventListener("click", function () {
                onCloseModal(elementDelete = modalWrap, elementClear1 = wrapInputContacts, elementClear2 = wrapperError);
                wrapInputContacts.append(buttonAddContact);
            });
            const buttonAddContact = document.createElement("button");
            buttonAddContact.type = "button";
            buttonAddContact.id = "button-contact"
            buttonAddContact.classList.add("modal__button-add-contact");
            const wrapAddContactImg = document.createElement("span");
            wrapAddContactImg.classList.add("modal__wrap-button-add-contact-img");
            const wrapAddContactText = document.createElement("span");
            wrapAddContactText.classList.add("modal__wrap-button-add-contact-text");
            wrapAddContactText.textContent = "Добавить контакт";
            buttonAddContact.append(wrapAddContactImg, wrapAddContactText);
            buttonAddContact.addEventListener("click", function () {
                addContact();
            })
            wrapInputContacts.append(buttonAddContact);

            const wrapperError = document.createElement("ul");
            wrapperError.id = "we";
            wrapperError.classList.add("hidden");

            const buttonSaveContact = document.createElement("button");
            buttonSaveContact.classList.add("modal__button-save-client");
            buttonSaveContact.textContent = "Сохранить";
            const buttonCansel = document.createElement("button");
            buttonCansel.classList.add("modal__button-cancel");
            buttonCansel.type = "button"
            buttonCansel.textContent = "Отмена";
            buttonCansel.addEventListener("click", function () {
                onCloseModal(elementDelete = modalWrap, elementClear1 = wrapInputContacts, elementClear2 = wrapperError);
                wrapInputContacts.append(buttonAddContact);
            })

            modalForm.append(modalTitle, buttonClose, modalWrapForSurname, modalWrapForName, modalWrapForLastname, wrapInputContacts, wrapperError, buttonSaveContact, buttonCansel)
            modalWrap.append(modalForm);

            modalWrap.onclick = function () {
                onCloseModal(elementDelete = modalWrap, elementClear1 = wrapInputContacts, elementClear2 = wrapperError);
                wrapInputContacts.append(buttonAddContact);
            }
            modalForm.onmouseover = function () {
                modalWrap.onclick = function () {
                    return
                }
            }
            modalForm.onmouseout = function () {
                modalWrap.onclick = function () {
                    onCloseModal(elementDelete = modalWrap, elementClear1 = wrapInputContacts, elementClear2 = wrapperError);
                    wrapInputContacts.append(buttonAddContact);
                }
            }

            return {
                modalWrap,
                modalForm,
                inputSurname,
                inputName,
                inputLastname,
                wrapInputSurname,
                wrapInputName,
                wrapInputLastname,
                wrapInputContacts,
                wrapperError,
                buttonAddContact,
            };
        };

        const modalForm = createdModalFormAddClient();
        function validInputForm() {
            modalForm.inputSurname.onblur = function () {
                if (modalForm.inputSurname.value != ``) {
                    modalForm.wrapInputSurname.classList.add("input-valid");
                }
                if (modalForm.inputSurname.value == ``) {
                    modalForm.wrapInputSurname.classList.remove("input-valid");
                }
            }
            modalForm.inputName.onblur = function () {
                if (modalForm.inputName.value != ``) {
                    modalForm.wrapInputName.classList.add("input-valid");
                }
                if (modalForm.inputName.value == ``) {
                    modalForm.wrapInputName.classList.remove("input-valid");
                }
            }
            modalForm.inputLastname.onblur = function () {
                if (modalForm.inputLastname.value != ``) {
                    modalForm.wrapInputLastname.classList.add("input-valid");
                }
                if (modalForm.inputLastname.value == ``) {
                    modalForm.wrapInputLastname.classList.remove("input-valid");
                }
            }
        }

        function createdClientItem(clients) {
            const clientRow = document.createElement("tr");
            clientRow.classList.add("table__client-row");
            clientRow.id = clients.id;

            const idClientCell = document.createElement("td");
            idClientCell.classList.add("table__client-id", "table__id-width");
            idClientCell.textContent = clients.id;
            const fullNameClientCell = document.createElement("td");
            fullNameClientCell.classList.add("table__client-fullname", "table__fullname-width");
            let lastname = ``;
            if (clients.lastName != "undefined") {
                lastname = clients.lastName;
            }
            fullNameClientCell.textContent = clients.surname + ` ` + clients.name + ` ` + lastname;

            const dateOfCreationCell = document.createElement("td");
            dateOfCreationCell.classList.add("table__data-creation", "table__created-date-width");
            dateOfCreationCell.textContent = clients.createdAt.slice(0, 4) + "." + clients.createdAt.slice(5, 7) + "." + clients.createdAt.slice(8, 10);
            const wrapForTimeCreateClient = document.createElement("span");
            wrapForTimeCreateClient.classList.add("table__wrpap-create-time");
            wrapForTimeCreateClient.textContent = clients.createdAt.slice(11, 16);
            const dateOfUpdateCell = document.createElement("td");
            dateOfUpdateCell.classList.add("table__data-change", "table__changes-date-width");
            dateOfUpdateCell.textContent = clients.updatedAt.slice(0, 4) + "." + clients.updatedAt.slice(5, 7) + "." + clients.updatedAt.slice(8, 10);
            const wrapForTimeUpdateClient = document.createElement("span");
            wrapForTimeUpdateClient.classList.add("table__wrpap-update-time");
            wrapForTimeUpdateClient.textContent = clients.updatedAt.slice(11, 16);
            const contactsClientCell = document.createElement("td");
            contactsClientCell.classList.add("table__contact-client", "table__contacts-width");
            const buttonsCell = document.createElement("td");
            buttonsCell.classList.add("table__buttons", "table__actions-width");

            const buttonChangeClient = document.createElement("button");
            buttonChangeClient.classList.add("button", "button-change", "button-change-bg");
            buttonChangeClient.textContent = "Изменить";
            buttonChangeClient.addEventListener("click", function () {
                getChangeClientForm(idClient = clientRow, button = buttonChangeClient);
            });

            const buttonRemoveClient = document.createElement("button");
            buttonRemoveClient.classList.add("button", "button-remove", "button-remove-bg");
            buttonRemoveClient.textContent = "Удалить";
            buttonRemoveClient.addEventListener("click", function () {
                getDeleteForm(idClient = clientRow);
            });

            dateOfCreationCell.append(wrapForTimeCreateClient);
            dateOfUpdateCell.append(wrapForTimeUpdateClient);
            buttonsCell.append(buttonChangeClient, buttonRemoveClient);
            clientRow.append(idClientCell, fullNameClientCell, dateOfCreationCell, dateOfUpdateCell, contactsClientCell, buttonsCell);

            return {
                clientRow,
                fullNameClientCell,
                dateOfCreationCell,
                dateOfUpdateCell,
                contactsClientCell,
                buttonsCell,
            }
        }

        function createModalFormDeletedClient(idClient) {
            const modalWrap = document.createElement("div");
            modalWrap.classList.add("modal__wrap");

            const modalForm = document.createElement("div");
            modalForm.classList.add("modal__form-remove");

            const titleFormRemove = document.createElement("h1");
            titleFormRemove.textContent = "Удалить клиента";
            titleFormRemove.classList.add("modal__title-remove");

            const textFormRemove = document.createElement("h1");
            textFormRemove.textContent = "Вы действительно хотите удалить данного клиента?";
            textFormRemove.classList.add("modal__text-remove")

            const buttonClose = document.createElement("button");
            buttonClose.classList.add("modal__button-close");
            buttonClose.type = "button";
            buttonClose.addEventListener("click", function () {
                onCloseModal(elementDelete = modalWrap, elementClear1 = null, elementClear2 = null);
            });
            const buttonRemoveContact = document.createElement("button");
            buttonRemoveContact.classList.add("button", "modal__button-remove");
            buttonRemoveContact.textContent = "Удалить";
            buttonRemoveContact.addEventListener("click", function () {
                onDeletedClient(idClient, elemDelete = modalWrap, elemBox = modalForm);
            });
            const buttonCansel = document.createElement("button");
            buttonCansel.classList.add("button", "modal__button-cancel");
            buttonCansel.type = "button";
            buttonCansel.textContent = "Отмена";
            buttonCansel.addEventListener("click", function () {
                onCloseModal(elementDelete = modalWrap, elementClear1 = null, elementClear2 = null);
            })

            modalForm.append(titleFormRemove, buttonClose, textFormRemove, buttonRemoveContact, buttonCansel);
            modalWrap.append(modalForm);

            modalWrap.onclick = function () {
                modalWrap.remove()
            }
            modalForm.onmouseover = function () {
                modalWrap.onclick = function () {
                    return
                }
            }
            modalForm.onmouseout = function () {
                modalWrap.onclick = function () {
                    modalWrap.remove()
                }
            }
            return {
                modalWrap,
                modalForm,
                buttonRemoveContact,
                buttonCansel,
            }
        }

        const counterForContacts = [];
        function createdModalFormChangeClient(dataBase) {
            const modalWrap = document.createElement("div");
            modalWrap.classList.add("modal__wrap");
            modalWrap.id = "id-for-del";

            const modalForm = document.createElement("div");
            modalForm.id = "modal-update-client"
            modalForm.classList.add("modal__form");
            const modalTitle = document.createElement("h2");
            modalTitle.classList.add("modal__title");
            modalTitle.textContent = "Изменить данные";
            const modalIdClient = document.createElement("span");
            modalIdClient.classList.add("modal__id-change")
            modalIdClient.textContent = dataBase.id
            modalTitle.append(modalIdClient);

            const modalWrapForSurname = document.createElement("div");
            const modalWrapForName = document.createElement("div");
            const modalWrapForLastname = document.createElement("div");
            modalWrapForSurname.classList.add("wrap-input");
            modalWrapForName.classList.add("wrap-input");
            modalWrapForLastname.classList.add("wrap-input");

            const elemForLabelSurname = document.createElement("span");
            elemForLabelSurname.classList.add("modal__label-elem");
            elemForLabelSurname.textContent = "*";
            const elemForLabelName = document.createElement("span");
            elemForLabelName.classList.add("modal__label-elem");
            elemForLabelName.textContent = "*";
            const wrapInputSurname = document.createElement("label");
            wrapInputSurname.classList.add("modal__wrap-input");
            const wrapInputName = document.createElement("label");
            wrapInputName.classList.add("modal__wrap-input");
            const wrapInputLastname = document.createElement("label");
            wrapInputLastname.classList.add("modal__wrap-input");

            const inputSurname = document.createElement("input");
            inputSurname.id = "surname";
            inputSurname.classList.add("modal__input", "modal__input-update");
            inputSurname.value = dataBase.surname;
            const inputName = document.createElement("input");
            inputName.id = "name";
            inputName.classList.add("modal__input", "modal__input-update");
            inputName.value = dataBase.name;
            const inputLastname = document.createElement("input");
            inputLastname.id = "lastname";
            inputLastname.classList.add("modal__input", "modal__input-update");
            let lastname = ``;
            if (dataBase.lastName != "undefined") {
                lastname = dataBase.lastName;
            }
            inputLastname.value = lastname;
            inputSurname.required = true;
            inputName.required = true;
            inputLastname.required = true;

            wrapInputSurname.append("Фамилия", elemForLabelSurname);
            wrapInputName.append("Имя", elemForLabelName);
            wrapInputLastname.append("Отчество");
            modalWrapForSurname.append(inputSurname, wrapInputSurname);
            modalWrapForName.append(inputName, wrapInputName);
            modalWrapForLastname.append(inputLastname, wrapInputLastname);

            const wrapInputContacts = document.createElement("div");
            wrapInputContacts.id = "dataInputContact"
            wrapInputContacts.classList.add("modal__wrap-input-contact");

            const buttonClose = document.createElement("button");
            buttonClose.classList.add("modal__button-close");
            buttonClose.type = "button";
            buttonClose.addEventListener("click", function () {
                onCloseModal(elementDelete = modalWrap, null, elementClear2 = wrapperError);
            });
            const buttonAddContact = document.createElement("button");
            buttonAddContact.type = "button";
            buttonAddContact.id = "button-contact"
            buttonAddContact.classList.add("modal__button-add-contact");
            const wrapAddContactImg = document.createElement("span");
            wrapAddContactImg.classList.add("modal__wrap-button-add-contact-img");
            const wrapAddContact = document.createElement("span");
            wrapAddContact.classList.add("modal__wrap-button-add-contact-text");
            wrapAddContact.textContent = "Добавить контакт";
            buttonAddContact.append(wrapAddContactImg, wrapAddContact);
            buttonAddContact.addEventListener("click", function () {
                addContact(wrapInputBox = wrapInputContacts, buttonFor = buttonAddContact, modalWindow = modalForm);
            });

            if (dataBase) {
                for (i = 0; i < dataBase.contacts.length; i++) {
                    const contact = createContact();
                    contact.typeContactText.textContent = dataBase.contacts[i].type;
                    contact.valueContact.value = dataBase.contacts[i].value;
                    contact.buttonDeleteContact.classList.remove("hidden");
                    contact.buttonDeleteContact.classList.add("modal__button-delete-contact");
                    wrapInputContacts.append(contact.wrapContacts);
                    counterForContacts.push(true);
                    modalForm.addEventListener('keydown', function (e) {
                        if (e.code === 'Escape') {
                            contact.closeSelect()
                        }
                    })
                    contact.typeContact.onmouseout = function () {
                        modalForm.onclick = contact.addHidden
                    }

                    contact.typeContact.onmouseover = function () {
                        modalForm.onclick = contact.typeContact.onclick;
                    }
                }

                wrapInputContacts.classList.add("modal__wrap-input-contact-bg")
            }

            wrapInputContacts.append(buttonAddContact);

            const wrapperError = document.createElement("ul");
            wrapperError.id = "we";
            wrapperError.classList.add("hidden");

            const buttonSaveContact = document.createElement("button");
            buttonSaveContact.classList.add("modal__button-save-client");
            buttonSaveContact.textContent = "Сохранить";
            if (counterForContacts.length == 10) {
                buttonAddContact.disabled = true;
                buttonAddContact.classList.add("disabled");
            };
            buttonSaveContact.addEventListener("click", function (e) {
                validation();
                pushUpdateDataClient(e, dataBase, nameClient = inputName, surnameClient = inputSurname, lastnameClient = inputLastname, elementDelete = modalWrap, elementClear1 = wrapInputContacts, elementClear2 = wrapperError, elemBox = modalForm);
            });
            const buttonRemoveClient = document.createElement("button");
            buttonRemoveClient.classList.add("modal__button-cancel");
            buttonRemoveClient.type = "button"
            buttonRemoveClient.textContent = "Удалить клиента";
            buttonRemoveClient.addEventListener("click", function () {
                getDeleteForm(idClient);
            })

            modalForm.append(modalTitle, modalWrapForSurname, modalWrapForName, modalWrapForLastname, buttonClose, wrapInputContacts, wrapperError, buttonSaveContact, buttonRemoveClient)
            modalWrap.append(modalForm);

            modalWrap.onclick = function () {
                onCloseModal(elementDelete = modalWrap, null, elementClear2 = wrapperError);
            }
            modalForm.onmouseover = function () {
                modalWrap.onclick = function () {
                    return
                }
            }
            modalForm.onmouseout = function () {
                modalWrap.onclick = function () {
                    onCloseModal(elementDelete = modalWrap, null, elementClear2 = wrapperError);
                }
            }
            return {
                modalWrap,
                modalForm,
                inputSurname,
                inputName,
                inputLastname,
                wrapInputContacts,
                buttonAddContact,
                buttonRemoveClient,
            };
        };

        function validationServerRequest(response, message) {
            if (!response.ok) {
                const wrapperError = document.getElementById("we");
                wrapperError.classList.remove("hidden");
                wrapperError.classList.add("modal__warning");
                if (message.message) {
                    wrapperError.append(response.status);
                }
                if (message.errors[0].message) {
                    wrapperError.append(response.status, message.errors[0].message);
                }
                if (!message.message && !message.errors[0].message) {
                    message = "Упс что-то пошло не так";
                    wrapperError.append(response.status, message);
                }
                e.preventDefault();
                return false;
            }
        }

        async function pushUpdateDataClient(e, dataBase, nameClient, surnameClient, lastnameClient, elementDelete, elementClear) {
            if (stop) {
                e.preventDefault();
                return false;
            } else {
                let contact = document.querySelectorAll(".modal__wrap-contact");
                const contactsForDB = [];
                if (contact) {
                    for (let i = 0; i < contact.length; i++) {
                        const contactForDB = {};
                        contactForDB.type = String(contact[i].children[0].children[0].textContent);
                        contactForDB.value = contact[i].children[1].value;
                        contactsForDB.push(contactForDB);
                    }
                }
                elemBox.append(loadIndicatorWT.wrapIndicator);

                const response = await fetch(`http://localhost:3000/api/clients/${dataBase.id}`,
                    {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: String(formatWord(nameClient.value)),
                            surname: String(formatWord(surnameClient.value)),
                            lastName: String(formatWord(lastnameClient.value)),
                            contacts: contactsForDB,
                        })
                    });

                let message = await response.json();
                validationServerRequest(response, message, e)
            }

            elementClear.innerHTML = ``;
            counterForContacts.length = 0;
            elementDelete.remove();
            renderClients();
        }

        function createContact() {
            const wrapContacts = document.createElement("div");
            wrapContacts.classList.add("modal__wrap-contact");

            const typeContact = document.createElement("div");
            typeContact.id = "select";
            typeContact.ariaRoleDescription = "select"
            const typeContactText = document.createElement("span");
            typeContact.classList.add("modal__type-contact");
            typeContactText.textContent = "Телефон";
            const phoneType = document.createElement("div");
            phoneType.textContent = "Телефон";
            phoneType.classList.add("hidden");
            typeContact.append(phoneType);
            const emailType = document.createElement("div");
            emailType.classList.add("hidden");
            emailType.textContent = "email";
            const facebookType = document.createElement("div");
            facebookType.classList.add("hidden");
            facebookType.textContent = "Facebook";
            const vkType = document.createElement("div");
            vkType.classList.add("hidden");
            vkType.textContent = "ВКонтакте";
            const otherType = document.createElement("div");
            otherType.classList.add("hidden");
            otherType.textContent = "Другое";

            typeContact.append(typeContactText, phoneType, emailType, facebookType, vkType, otherType);

            function openSelect() {
                typeContact.classList.add("open");

                phoneType.classList.remove("hidden");
                phoneType.classList.add("modal__type", "type-phone");

                emailType.classList.remove("hidden");
                emailType.classList.add("modal__type", "type-email");

                facebookType.classList.remove("hidden");
                facebookType.classList.add("modal__type", "type-facebook");

                vkType.classList.remove("hidden");
                vkType.classList.add("modal__type", "type-vk");

                otherType.classList.remove("hidden");
                otherType.classList.add("modal__type", "type-other");
            }

            function closeSelect() {
                if (typeContact.className.includes("open")) {
                    phoneType.classList.add("hidden");
                    phoneType.classList.remove("modal__type", "type-phone");

                    emailType.classList.add("hidden");
                    emailType.classList.remove("modal__type", "type-email");

                    facebookType.classList.add("hidden");
                    facebookType.classList.remove("modal__type", "type-facebook");

                    vkType.classList.add("hidden");
                    vkType.classList.remove("modal__type", "type-vk");

                    otherType.classList.add("hidden");
                    otherType.classList.remove("modal__type", "type-other");

                    typeContact.classList.remove("open");
                }
            }

            typeContact.tabIndex = "0";
            phoneType.tabIndex = "0";
            emailType.tabIndex = "0";
            facebookType.tabIndex = "0";
            vkType.tabIndex = "0";
            otherType.tabIndex = "0";

            function addHidden() {
                const openselects = document.querySelectorAll(".open");
                for (let i = 0; i < openselects.length; i++) {
                    for (let j = 1; j < openselects[i].children.length; j++) {
                        openselects[i].children[j].classList.add("hidden");
                    }
                    openselects[i].classList.remove("open");
                }
            }

            typeContact.addEventListener("click", function () {
                if (typeContact.className.includes("open")) {
                    closeSelect();
                    return;
                } else {
                    addHidden();
                    openSelect();
                    return
                }
            })

            typeContact.onfocus = typeContact.addEventListener('keydown', function (e) {
                if (e.code === 'Enter' || e.code === 'Space') {
                    if (typeContact.className.includes("open")) {
                        closeSelect();
                        return;
                    } else {
                        addHidden();
                        openSelect();
                        return
                    }
                }
            })

            const modalWindow = document.getElementById("modal__form");
            if (modalWindow) {
                modalWindow.addEventListener('keydown', function (e) {
                    if (e.code === 'Escape') {
                        closeSelect();
                    }
                })

                typeContact.onmouseout = function () {
                    modalWindow.onclick = function () {
                        addHidden();
                    }
                }

                typeContact.onmouseover = function () {
                    modalWindow.onclick = typeContact.onclick;
                }
            }

            phoneType.addEventListener("click", function () {
                typeContactText.textContent = phoneType.textContent;
            })
            phoneType.onfocus = phoneType.addEventListener('keydown', function (e) {
                if (e.code === 'Enter' || e.code === 'Space') {
                    typeContactText.textContent = phoneType.textContent;
                }
            })
            emailType.addEventListener("click", function () {
                typeContactText.textContent = emailType.textContent;
            })
            emailType.onfocus = emailType.addEventListener('keydown', function (e) {
                if (e.code === 'Enter' || e.code === 'Space') {
                    typeContactText.textContent = emailType.textContent;
                }
            })
            facebookType.addEventListener("click", function () {
                typeContactText.textContent = facebookType.textContent;
            })
            facebookType.onfocus = facebookType.addEventListener('keydown', function (e) {
                if (e.code === 'Enter' || e.code === 'Space') {
                    typeContactText.textContent = facebookType.textContent;
                }
            })
            vkType.addEventListener("click", function () {
                typeContactText.textContent = vkType.textContent;
            })
            vkType.onfocus = vkType.addEventListener('keydown', function (e) {
                if (e.code === 'Enter' || e.code === 'Space') {
                    typeContactText.textContent = vkType.textContent;
                }
            })
            otherType.addEventListener("click", function () {
                typeContactText.textContent = otherType.textContent;
            })
            otherType.onfocus = otherType.addEventListener('keydown', function (e) {
                if (e.code === 'Enter' || e.code === 'Space') {
                    typeContactText.textContent = otherType.textContent;
                }
            })

            const valueContact = document.createElement("input");
            valueContact.classList.add("modal__value-contact");
            valueContact.placeholder = "Введите данные контакта";
            valueContact.type = "text";
            valueContact.onfocus = function () {
                closeSelect();
            }

            const buttonDeleteContact = document.createElement("button");
            buttonDeleteContact.type = "button";
            buttonDeleteContact.classList.add("hidden");
            const tooltipForDel = document.createElement("span");
            tooltipForDel.textContent = "Удалить контакт";
            tooltipForDel.classList.add("tooltip-del");

            valueContact.addEventListener("input", function () {
                if (valueContact.value != ``) {
                    buttonDeleteContact.classList.remove("hidden");
                    buttonDeleteContact.classList.add("modal__button-delete-contact");
                } else {
                    buttonDeleteContact.classList.add("hidden");
                    buttonDeleteContact.classList.remove("modal__button-delete-contact");
                }
            })

            buttonDeleteContact.onmouseover = function () {
                buttonDeleteContact.append(tooltipForDel);
            }

            buttonDeleteContact.onmouseout = function () {
                tooltipForDel.remove();
            }
            buttonDeleteContact.addEventListener("click", function () {
                const hiddenButton = document.getElementById("button-contact");
                counterForContacts.length = counterForContacts.length - 1;
                if (counterForContacts.length < 10 && hiddenButton.className.includes("disabled")) {
                    hiddenButton.disabled = false;
                    hiddenButton.classList.remove("disabled");
                }
                if (counterForContacts.length == 0) {
                    const wrap = document.querySelector(".modal__wrap-input-contact")
                    wrap.classList.remove("modal__wrap-input-contact-bg")
                }
                wrapContacts.remove();
            });

            wrapContacts.append(typeContact, valueContact, buttonDeleteContact);
            return {
                addHidden,
                closeSelect,
                wrapContacts,
                typeContact,
                typeContactText,
                valueContact,
                buttonDeleteContact,
            }
        };

        function addContact(wrapInputBox, buttonFor, modalWindow) {
            const contact = createContact();

            if (wrapInputBox == undefined && buttonFor == undefined && modalWindow == undefined) {
                modalForm.wrapInputContacts.append(contact.wrapContacts);
                counterForContacts.push(true);
                if (counterForContacts.length == 10) {
                    modalForm.buttonAddContact.disabled = true;
                    modalForm.buttonAddContact.classList.add("disabled")
                }
                if (counterForContacts.length > 0) {
                    modalForm.wrapInputContacts.classList.add("modal__wrap-input-contact-bg")
                }
            } else {
                wrapInputBox.append(contact.wrapContacts);
                counterForContacts.push(true);
                if (counterForContacts.length == 10) {
                    buttonFor.disabled = true;
                    buttonFor.classList.add("disabled")
                }
                if (counterForContacts.length > 0) {
                    wrapInputBox.classList.add("modal__wrap-input-contact-bg")
                }

                modalWindow.addEventListener('keydown', function (e) {
                    if (e.code === 'Escape') {
                        contact.closeSelect()
                    }
                })
                contact.typeContact.onmouseout = function () {
                    modalWindow.onclick = contact.addHidden
                }

                contact.typeContact.onmouseover = function () {
                    modalWindow.onclick = contact.typeContact.onclick;
                }
            }
        };

        function getDeleteForm(idClient) {
            const modalFormDelete = createModalFormDeletedClient(idClient);
            container.append(modalFormDelete.modalWrap);
        }

        async function onDeletedClient(idClient, elemDelete, elemBox) {
            elemBox.append(loadIndicatorWT.wrapIndicator);
            await fetch(`http://localhost:3000/api/clients/${idClient.id}`, {
                method: 'DELETE',
            });
            elemDelete.remove();

            if (document.getElementById("id-for-del")) {
                document.getElementById("id-for-del").remove();
            }
            renderClients();
        };

        async function getChangeClientForm(idClient, button) {
            button.classList.remove("button-change-bg");
            button.classList.add("button-loader");
            const response = await fetch(`http://localhost:3000/api/clients/${idClient.id}`);
            const dataClient = await response.json();
            if (dataClient) {
                button.classList.remove("button-loader");
                button.classList.add("button-change-bg");
            }
            dataBase = dataClient
            const modalChangeClient = createdModalFormChangeClient(dataBase);
            container.append(modalChangeClient.modalWrap);
        }

        function onCloseModal(elementDelete, elementClear1, elementClear2) {
            const warning = document.querySelectorAll(".warning")
            if (elementClear1 !== null) {
                elementClear1.innerHTML = ``;
                elementClear1.append(modalForm.buttonAddContact)
            }
            if (elementClear2 !== null) {
                elementClear2.innerHTML = ``;
                elementClear2.classList.remove("modal__warning");
                elementClear2.classList.add("hidden");
            }
            counterForContacts.length = 0;
            if (modalForm.inputSurname && modalForm.inputName && modalForm.inputSurname) {
                modalForm.inputSurname.value = ``;
                modalForm.inputName.value = ``;
                modalForm.inputLastname.value = ``;
            }
            if (warning) {
                for (let item of warning) {
                    item.classList.remove("warning")
                }
            }

            elementDelete.remove();
        };

        function formatWord(word) {
            word = word.trim()
            if (word.length !== 0) {
                let formattedWord = (word[0].toUpperCase() + word.slice(1).toLowerCase());
                return formattedWord;
            }
        };

        const buttonAddClient = document.getElementById("button-add");
        buttonAddClient.addEventListener("click", function () {
            modalForm.buttonAddContact.disabled = false;
            modalForm.buttonAddContact.classList.remove("disabled");
            container.append(modalForm.modalWrap);
            modalForm.wrapInputSurname.classList.remove("input-valid");
            modalForm.wrapInputName.classList.remove("input-valid");
            modalForm.wrapInputLastname.classList.remove("input-valid");
            validInputForm();
        });

        let stop = null;
        function validation() {
            const clientName = document.getElementById("name");
            const clientSurname = document.getElementById("surname");
            const clientLastname = document.getElementById("lastname");
            const wrapperError = document.getElementById("we");
            const contacts = document.querySelectorAll(".modal__wrap-contact");

            let errorName = ``;
            let errorSurName = ``;
            let errorLastName = ``;
            let errorContact = ``;

            if (clientName.value.trim() == ``) {
                errorName = "Поле с именем не запонено.";
            }
            if (clientSurname.value.trim() == ``) {
                errorSurName = `Поле с фамилией не запонено.`;
            }

            const invalidSymbols = "\\.,:;-_!?»‘()[]{}<>|=#%№+&*@^~/1234567890";
            for (let symbol of invalidSymbols) {
                if (clientName.value.trim().includes(symbol)) {
                    errorName = "В поле с именем недопустимый знак.";
                }
                if (clientSurname.value.trim().includes(symbol)) {
                    errorSurName = "В поле с фамилией недопустимый знак.";
                }
                if (clientLastname.value.trim().includes(symbol)) {
                    errorLastName = "В поле с очеством недопустимый знак.";
                }
            }

            if (contacts) {
                for (i = 0; i < contacts.length; i++) {
                    if (contacts[i].children[1].value == ``) {
                        errorContact = `stop`;
                    }
                    if (contacts[i].children[1].value != `` && contacts[i].children[0].children[0].textContent == "email" && !contacts[i].children[1].value.includes("@")) {
                        errorContact = `stopto`;
                    }
                }
            }

            if (errorContact !== `` || errorName !== `` || errorSurName !== `` || errorLastName !== ``) {
                wrapperError.classList.add("modal__warning");
                wrapperError.classList.remove("hidden");
                wrapperError.innerHTML = ``;
                function errorMess(mess) {
                    const item = document.createElement("li");
                    if (mess !== ``) {
                        item.textContent = mess;
                        wrapperError.append(item);
                    }
                }
                function warning(input, stat) {
                    if (input.value == `` && input != clientLastname || stat == "error") {
                        input.classList.add("warning");
                    }
                    for (let symbol of invalidSymbols) {
                        if (input.value.includes(symbol)) {
                            input.classList.add("warning");
                        }
                    }
                    input.addEventListener("input", function () {
                        input.classList.remove("warning");
                    })
                }

                warning(clientName);
                warning(clientSurname);
                warning(clientLastname);
                errorMess(errorSurName);
                errorMess(errorName);
                errorMess(errorLastName);

                if (contacts) {
                    for (i = 0; i < contacts.length; i++) {
                        if (contacts[i].children[1].value == ``) {
                            errorContact = `Не заполнен ${contacts[i].children[0].children[0].textContent}`;
                            errorMess(errorContact);
                            warning(contacts[i].children[1])
                        }
                        if (contacts[i].children[1].value != `` && contacts[i].children[0].children[0].textContent === "email" && !contacts[i].children[1].value.includes("@")) {
                            errorContact = `В поле email нет обязательного знака "@"`;
                            errorMess(errorContact);
                            warning(contacts[i].children[1], "error");
                        }
                    }
                }
            }

            if (errorContact == `` && errorName == `` && errorSurName == `` && errorLastName == ``) {
                stop = false;
            } else {
                stop = true;
            }
        }

        async function pushDataClient(e) {
            if (stop) {
                e.preventDefault();
                return false;
            } else {
                let contact = document.querySelectorAll(".modal__wrap-contact");
                const contactsForDB = [];
                if (contact) {
                    for (let i = 0; i < contact.length; i++) {
                        const contactForDB = {};
                        contactForDB.type = String(contact[i].children[0].children[0].textContent);
                        contactForDB.value = contact[i].children[1].value;
                        contactsForDB.push(contactForDB);
                    }
                }
                modalForm.modalForm.append(loadIndicatorWT.wrapIndicator);
                const response = await fetch('http://localhost:3000/api/clients', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: String(formatWord(modalForm.inputName.value)),
                        surname: String(formatWord(modalForm.inputSurname.value)),
                        lastName: String(formatWord(modalForm.inputLastname.value)),
                        contacts: contactsForDB,
                    })
                });

                let message = await response.json();
                validationServerRequest(response, message, e);
                onCloseModal(elementDelete = modalForm.modalWrap, modalForm.wrapInputContacts, modalForm.wrapperError);
                modalForm.modalWrap.remove();
                counterForContacts.length = 0;
            }
            renderClients();
        }


        //Валидация формы нового клиента и занесение данных в БД
        modalForm.modalForm.addEventListener("submit", function (e) {
            e.preventDefault();
            validation();
            pushDataClient(e);
        });

        //Отрисовка
        async function renderClients(arr) {
            function renderContacts(cellContact, arr) {
                const svgTel = `<svg class = "contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <g opacity="0.7">\
                <circle cx="8" cy="8" r="8"/>\
                <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>\
                  </g>\
                </svg>`;
                const svgEmail = `<svg class = "contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z"/>\
                </svg>`;
                const svgVK = `<svg class = "contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <g opacity="0.7">\
                <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z"/>\
                </g>\
                </svg>`;
                const svgFacebook = `<svg class = "contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <g opacity="0.7">\
                <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z"/>\
                </g>\
                </svg>`;
                const svgOther = `<svg class = "contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z"/>\
                </svg>`;
                const VISIBLE_CONTACT = 3;
                let CounterForElementContact = 0;
                const wrapForHiddenContact = document.createElement("button");
                const contact = document.createElement("span");
                const hiddenContacts = [];

                for (let j = 0; j < arr.length; j++) {
                    const wrapForSVG = document.createElement("button");
                    wrapForSVG.classList.add("wrap-contact-svg");
                    switch (arr[j].type) {
                        case "Телефон":
                            wrapForSVG.innerHTML = svgTel;
                            break;
                        case "email":
                            wrapForSVG.innerHTML = svgEmail;
                            break;
                        case "ВКонтакте":
                            wrapForSVG.innerHTML = svgVK;
                            break;
                        case "Facebook":
                            wrapForSVG.innerHTML = svgFacebook;
                            break;
                        case "Другое":
                            wrapForSVG.innerHTML = svgOther;
                            wrapForSVG.classList.add("other");
                            break;
                    }

                    if (j > VISIBLE_CONTACT) {
                        wrapForSVG.classList.add('hidden');
                        wrapForSVG.classList.remove('wrap-contact-svg');
                        CounterForElementContact = CounterForElementContact + 1;
                        hiddenContacts.push(wrapForSVG);
                    }
                    if (j <= VISIBLE_CONTACT) {
                        cellContact.append(wrapForSVG);
                    }

                    wrapForSVG.onmouseover = function () {
                        contact.textContent = arr[j].type + ": " + arr[j].value;
                        if (wrapForSVG.className.includes("other")) {
                            contact.textContent = arr[j].value;
                        }
                        contact.classList.add("tooltip")
                        wrapForSVG.append(contact);
                    }
                    wrapForSVG.onfocus = function () {
                        contact.textContent = arr[j].type + ": " + arr[j].value;
                        if (wrapForSVG.className.includes("other")) {
                            contact.textContent = arr[j].value;
                        }
                        contact.classList.add("tooltip")
                        wrapForSVG.append(contact);
                    }

                    wrapForSVG.onblur = function () {
                        contact.remove();
                    }
                    wrapForSVG.onmouseout = function () {
                        contact.remove();
                    }
                }

                if (CounterForElementContact != 0) {
                    wrapForHiddenContact.classList.add("wrap-hidden-contact");
                    wrapForHiddenContact.append("+", CounterForElementContact);

                    cellContact.append(wrapForHiddenContact);
                }

                wrapForHiddenContact.addEventListener("click", function () {
                    for (let i = 0; i < hiddenContacts.length; i++) {
                        hiddenContacts[i].classList.remove("hidden");
                        hiddenContacts[i].classList.add("wrap-contact-svg");
                        cellContact.append(hiddenContacts[i])
                    }
                    wrapForHiddenContact.remove();
                })
            };

            if (arr == undefined) {
                tablebody.innerHTML = ``;
                loaded.append(loadIndicatorWT.wrapIndicator);
                const response = await fetch('http://localhost:3000/api/clients');
                const dataBase = await response.json();
                if (dataBase) {
                    loadIndicatorWT.wrapIndicator.remove();
                }

                for (let i = 0; i < dataBase.length; i++) {
                    const row = createdClientItem(dataBase[i]);

                    renderContacts(row.contactsClientCell, dataBase[i].contacts);

                    tablebody.append(row.clientRow);
                }
            }

            if (arr !== undefined && arr !== null) {
                tablebody.innerHTML = ``;
                for (let i = 0; i < arr.length; i++) {
                    const row = createdClientItem(arr[i]);

                    renderContacts(row.contactsClientCell, arr[i].contacts);

                    tablebody.append(row.clientRow);
                }
            }
        };
        renderClients();

        //Фильтрация клиента
        const idClientSort = document.getElementById("client-id");
        const wrapOfCellId = document.getElementById("wrap-id");
        const surnameClientSort = document.getElementById("client-fullname");
        const wrapOfCellSurname = document.getElementById("wrap-fullname");
        const createClientSort = document.getElementById("client-created");
        const wrapOfCellCreate = document.getElementById("wrap-created-client");
        const changesClientSort = document.getElementById("client-last-changes");
        const wrapOfCellUpdate = document.getElementById("wrap-change-client");

        async function sortStudents(prop, wrapClass, sortRoute) {
            container.append(loadIndicatorWT.wrapIndicator);
            const response = await fetch('http://localhost:3000/api/clients');
            const dataBase = await response.json();
            if (dataBase) {
                loadIndicatorWT.wrapIndicator.remove();
            }

            if (wrapClass.className.includes("up")) {
                wrapClass.classList.remove("up");
                wrapClass.classList.add("down");
                sortRoute = true;

            } else if (wrapClass.className.includes("down")) {
                wrapClass.classList.remove("down");
                wrapClass.classList.add("up");
                sortRoute = false;
            };

            dataBase.sort(function (a, b) {
                if (sortRoute ? a[prop] < b[prop] : a[prop] > b[prop]) return -1;
            });
            renderClients(dataBase);
        };

        const cellsOfHeadTable = [idClientSort, surnameClientSort, createClientSort, changesClientSort];
        for (let cell of cellsOfHeadTable) {
            cell.addEventListener("click", function () {
                switch (cell) {
                    case idClientSort:
                        sortStudents("id", wrapOfCellId);
                        break;
                    case surnameClientSort:
                        sortStudents("surname", wrapOfCellSurname);
                        break;
                    case createClientSort:
                        sortStudents("createdAt", wrapOfCellCreate);
                        break;

                    case changesClientSort:
                        sortStudents("updatedAt", wrapOfCellUpdate);
                        break;
                };
            });
        };

        //Поиск клиента
        const filterClient = document.getElementById("find");
        const filtredClients = [];
        async function getfiltredClient(e) {
            e.preventDefault();
            filtredClients.length = 0;
            const response = await fetch('http://localhost:3000/api/clients');
            const dataBase = await response.json();
            for (let item of dataBase) {
                let foundDataItem = item.name + item.surname + item.lastName;
                if (foundDataItem.toLowerCase().includes(filterClient.value.toLowerCase().trim())) {
                    filtredClients.push(item);
                }
            }
            if (filterClient.value !== ``) {
                renderClients(filtredClients);
            } else {
                renderClients();
            }
        }

        function debounce(func, ms) {
            let timeout;
            return function () {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, arguments), ms);
            };
        }

        let debonsedFiltred = debounce(getfiltredClient, 1000);
        filterClient.addEventListener("input", debonsedFiltred);

    });
})();




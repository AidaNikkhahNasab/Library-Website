'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">library-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-04e29a9488ecd9565bbb95d135b0eb35b122d790d7c29a4d9f237588d273def5217f70128b2364aca737df1ae3b6c004f38b7497f616966e4c938e9912cbf863"' : 'data-target="#xs-components-links-module-AppModule-04e29a9488ecd9565bbb95d135b0eb35b122d790d7c29a4d9f237588d273def5217f70128b2364aca737df1ae3b6c004f38b7497f616966e4c938e9912cbf863"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-04e29a9488ecd9565bbb95d135b0eb35b122d790d7c29a4d9f237588d273def5217f70128b2364aca737df1ae3b6c004f38b7497f616966e4c938e9912cbf863"' :
                                            'id="xs-components-links-module-AppModule-04e29a9488ecd9565bbb95d135b0eb35b122d790d7c29a4d9f237588d273def5217f70128b2364aca737df1ae3b6c004f38b7497f616966e4c938e9912cbf863"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReserveBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReserveBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectLanguageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectLanguageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-04e29a9488ecd9565bbb95d135b0eb35b122d790d7c29a4d9f237588d273def5217f70128b2364aca737df1ae3b6c004f38b7497f616966e4c938e9912cbf863"' : 'data-target="#xs-injectables-links-module-AppModule-04e29a9488ecd9565bbb95d135b0eb35b122d790d7c29a4d9f237588d273def5217f70128b2364aca737df1ae3b6c004f38b7497f616966e4c938e9912cbf863"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-04e29a9488ecd9565bbb95d135b0eb35b122d790d7c29a4d9f237588d273def5217f70128b2364aca737df1ae3b6c004f38b7497f616966e4c938e9912cbf863"' :
                                        'id="xs-injectables-links-module-AppModule-04e29a9488ecd9565bbb95d135b0eb35b122d790d7c29a4d9f237588d273def5217f70128b2364aca737df1ae3b6c004f38b7497f616966e4c938e9912cbf863"' }>
                                        <li class="link">
                                            <a href="injectables/WebSocketService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebSocketService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/I18nModule.html" data-type="entity-link" >I18nModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-599cb829a85a0a10c5c4bc68e94c5f2f1afe6ffa1a02cc469ee92fea288f6075b4f241fbbd478a8e5ea0a987089e65e5d04c2270627e8a8bd54d6ae4b8910107"' : 'data-target="#xs-components-links-module-LoginModule-599cb829a85a0a10c5c4bc68e94c5f2f1afe6ffa1a02cc469ee92fea288f6075b4f241fbbd478a8e5ea0a987089e65e5d04c2270627e8a8bd54d6ae4b8910107"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-599cb829a85a0a10c5c4bc68e94c5f2f1afe6ffa1a02cc469ee92fea288f6075b4f241fbbd478a8e5ea0a987089e65e5d04c2270627e8a8bd54d6ae4b8910107"' :
                                            'id="xs-components-links-module-LoginModule-599cb829a85a0a10c5c4bc68e94c5f2f1afe6ffa1a02cc469ee92fea288f6075b4f241fbbd478a8e5ea0a987089e65e5d04c2270627e8a8bd54d6ae4b8910107"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Admin.html" data-type="entity-link" >Admin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatMessageDto.html" data-type="entity-link" >ChatMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                            <li class="link">
                                <a href="classes/Logging.html" data-type="entity-link" >Logging</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/Session.html" data-type="entity-link" >Session</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookService.html" data-type="entity-link" >BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocketioService.html" data-type="entity-link" >SocketioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WebSocketService.html" data-type="entity-link" >WebSocketService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Event.html" data-type="entity-link" >Event</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthor.html" data-type="entity-link" >IAuthor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthorModel.html" data-type="entity-link" >IAuthorModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBook.html" data-type="entity-link" >IBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookModel.html" data-type="entity-link" >IBookModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IContact.html" data-type="entity-link" >IContact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IContactModel.html" data-type="entity-link" >IContactModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IManager.html" data-type="entity-link" >IManager</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IManagerModel.html" data-type="entity-link" >IManagerModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISession.html" data-type="entity-link" >ISession</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISessionModel.html" data-type="entity-link" >ISessionModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserModel.html" data-type="entity-link" >IUserModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Languages.html" data-type="entity-link" >Languages</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
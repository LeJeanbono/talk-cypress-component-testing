import './commands'
import {mount} from 'cypress/vue'

import '../../src/assets/main.css';
import 'cypress-axe'
import {addMatchImageSnapshotCommand} from "@simonsmith/cypress-image-snapshot/command";

Cypress.Commands.add('mount', mount)

addMatchImageSnapshotCommand()
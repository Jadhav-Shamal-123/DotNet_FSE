import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  isFormDirty(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> =
(component) => {

  if (component.isFormDirty()) {
    return window.confirm(
      'You have unsaved changes. Leave?'
    );
  }

  return true;
};
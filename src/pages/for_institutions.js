/**
 * /for-institutions — see _audience.js for the shared renderer and copy.
 */
import { renderAudiencePage, AUDIENCES } from './_audience.js';

export function renderForInstitutionsPage() {
  return renderAudiencePage(AUDIENCES.institutions);
}

/**
 * /for-teachers — see _audience.js for the shared renderer and copy.
 */
import { renderAudiencePage, AUDIENCES } from './_audience.js';

export function renderForTeachersPage() {
  return renderAudiencePage(AUDIENCES.teachers);
}

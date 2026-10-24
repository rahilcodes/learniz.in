/**
 * /for-students — see _audience.js for the shared renderer and copy.
 */
import { renderAudiencePage, AUDIENCES } from './_audience.js';

export function renderForStudentsPage() {
  return renderAudiencePage(AUDIENCES.students);
}

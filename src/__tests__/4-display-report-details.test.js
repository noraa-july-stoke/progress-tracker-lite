import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('04 - Display a Report\'s Details', () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    container.id = "root";
    document.body.appendChild(container);
    jest.mock('react-router-dom', () => {
      // Require the original module to not be mocked...
      const originalModule = jest.requireActual('react-router-dom');
      return {
        __esModule: true,
        ...originalModule,
        BrowserRouter: originalModule.MemoryRouter,
      };
    });
  });

  afterEach(() => {
    jest.resetModules();
    container.remove();
    container = null;
  });

  describe('show a detailed report page when the link to "/reports/:reportId" is clicked on the ReportIndexItem', () => {
    it('should show the first report when the "Report #1" text link is clicked', async () => {
      act(() => {
        require("../index.js")
      });
      const link = screen.getByRole('link', { name: "Report #1"});
      userEvent.click(link);
      await waitForElementToBeRemoved(link);
      expect(container.innerHTML).toBe("<h1>Progress Tracker Lite</h1><section>ID: 1<br>Understanding: Confident I understand everything.<br>Improvement: Dang, I wish I knew Redux as well as Brad. Also, I need to get better at JavaScript.<br><a href=\"/\">Back to Report Index</a></section>");
    });

    it('should show the fourth report when the "Report #4" text link is clicked', async () => {
      act(() => {
        require("../index.js")
      });
      const link = screen.getByRole('link', { name: "Report #4"});
      userEvent.click(link);
      await waitForElementToBeRemoved(link);
      expect(container.innerHTML).toBe("<h1>Progress Tracker Lite</h1><section>ID: 4<br>Understanding: Extremely comfortable. It's easy. Would ace the assessment.<br>Improvement: Wow, I wish I knew SQL as well as Todd. Also, I need to get better at Jest.<br><a href=\"/\">Back to Report Index</a></section>");
    });
  });
});
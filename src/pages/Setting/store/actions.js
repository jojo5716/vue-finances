const fetchSettingData = async (context) => {
  try {
    console.log('Calling AJAX to get setting page...');
    context.commit('LOAD_SETTING_PAGE_DATA', { salary: 2000 });
  } catch (error) {
    // Send error to Sentry.
    console.error(error);
  }
};

export default {
  fetchSettingData,
};

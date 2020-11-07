const fetchHomeData = async (context) => {
  try {
    console.log('Calling AJAX to get home page...');
    context.commit('LOAD_HOME_PAGE_DATA', { a: 1 });
  } catch (error) {
    // Send error to Sentry.
    console.error(error);
  }
};

export default {
  fetchHomeData,
};

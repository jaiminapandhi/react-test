/* eslint-disable import/prefer-default-export */
const getBaseUrl = () => {
  const dev = process.env.NODE_ENV === 'development';
  if (dev) {
    return 'http://13.127.19.204:3000/api/v1';
    // return process.env.BASE_URL;
  }
  return 'http://13.127.19.204:3000/api/v1';
};
export const getUrl = (type) => {
  const baseUrl = getBaseUrl();
  switch (type) {
    case 'login':
      return `${baseUrl}/admin/auth/login`;
    case 'user-list':
      return `${baseUrl}/admin/users/list`;
    case 'user-add':
      return `${baseUrl}/admin/users/register`;
    case 'user-detail':
      return `${baseUrl}/admin/users`;
    case 'zone-list':
      return `${baseUrl}/zones/admin/list`;
    case 'zone-add':
      return `${baseUrl}/zones/admin/add`;
    case 'zone-detail':
      return `${baseUrl}/zones/admin`;
    case 'dept-list':
      return `${baseUrl}/departments/admin/list`;
    case 'dept-add':
      return `${baseUrl}/departments/admin/add`;
    case 'dept-detail':
      return `${baseUrl}/departments/admin`;
    case 'work-type-list':
      return `${baseUrl}/worktypes/admin/list`;
    case 'work-type-add':
      return `${baseUrl}/worktypes/admin/add`;
    case 'work-type-detail':
      return `${baseUrl}/worktypes/admin`;
    case 'check-list':
      return `${baseUrl}/checklist/admin/list`;
    case 'get-presigned-url':
      return `${baseUrl}/checklist/admin/pre-signed-url`;
    case 'checklist-add':
      return `${baseUrl}/checklist/admin/add`;
    case 'checklist-detail':
      return `${baseUrl}/checklist/admin`;
    // case "forgot-password":
    //   return `${baseUrl}/credential/intiateResetPassword`;
    // case "change-profile":
    //   return `${baseUrl}/profile/pic`;
    // case "get-profile":
    //   return `${baseUrl}/profile`;
    // case "change-profile-detail":
    //   return `${baseUrl}/profile`;
    // case "change-password":
    //   return `${baseUrl}/credential/changepassword`;
    // case "create-meeting":
    //   return `${baseUrl}/meetings`;
    // case "get-meetings":
    //   return `${baseUrl}/meetings`;
    // case "get-contacts":
    //   return `${baseUrl}/contacts`;
    // case "recordings":
    //   return `${baseUrl}/recordings`;
    // case "preferences":
    //   return `${baseUrl}/preferences/host`;
    // case "userExist":
    //   return `${baseUrl}/user/isExist`;
    default:
      return baseUrl;
  }
};

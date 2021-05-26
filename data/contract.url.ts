
export class ContractUrl{

    static API_V1="/api/v1"
    static ACCOUNT_REGISTER='account/register'
    static ACCOUNT_LOGIN='account/login'

    static GUFF_STORIES = 'guff-stories'
    static GUFF_STORIES_CREATE = `${ContractUrl.GUFF_STORIES}/create`

    static GUFF_TEXT = "/guff-text"
    static GUFF_TEXT_CREATE = `${ContractUrl.GUFF_TEXT}/create`
    static GUFF_TEXT_READ = `${ContractUrl.GUFF_TEXT}/read`


    static NEWSFEED="newsfeed"
    static PLAYFEED="playfeed"
    static NEWSFEED_READ_INITIAL_FEED=ContractUrl.NEWSFEED+'/read-initial-newsfeed'
    static NEWSFEED_READ_PAGINATE_FEED=ContractUrl.NEWSFEED+'/read-paginate-newsfeed'
    static PLAY_FEED_READ = ContractUrl.PLAYFEED+'/read'

    static REPLY_CONTENT = "replyContent"
    static REPLY_CONTENT_CREATE =  `${ContractUrl.REPLY_CONTENT}/create`
    static REPLIES_CONTENT_CREATE = `${ContractUrl.REPLY_CONTENT}/replies/create`

}
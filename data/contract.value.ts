export class ContractValue {

    static DEFAULT_AUTH_HEADER='authorization'
    static SECRET_KEY='KAWADI-SECRET-KEY'

    public static POST_FEED_TYPE_TEXT = 0

    /**
     * PostFeed Scope
     */
    public static PUBLIC_DATA_SCOPE = 0
    public static FRIENDS_DATA_SCOPE = 1
    public static PRIVATE_DATA_SCOPE = 2

    /**
     * Scheduler config
     */
    public static POSTFEED_TEXT_SCHEDULER = "POSTFEED_TEXT_SCHEDULER"
}
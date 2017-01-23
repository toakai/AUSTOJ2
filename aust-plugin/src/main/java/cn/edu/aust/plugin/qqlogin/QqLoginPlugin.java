package cn.edu.aust.plugin.qqlogin;

import java.util.regex.Pattern;

import cn.edu.aust.plugin.LoginPlugin;

/**
 * @author Niu Li
 * @date 2017/1/23
 */
public class QqLoginPlugin extends LoginPlugin{

    /** "状态"属性名称 */
    private static final String STATE_ATTRIBUTE_NAME = QqLoginPlugin.class.getName() + ".STATE";

    /** "openId"配比 */
    private static final Pattern OPEN_ID_PATTERN = Pattern.compile("\"openid\"\\s*:\\s*\"(\\S*?)\"");


}

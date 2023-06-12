package javat;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Component
@Service
public class Userdao {

    JdbcTemplate template;
    public Userdao(JdbcTemplate template)
    {
        this.template = template;
    }
    public List<User> display() throws ClassNotFoundException, SQLException
    {
        return template.query("select * from users",(RowMapper)(rs,row) ->{
            User u = new User();
            u.setUserID(rs.getInt(1));
            u.setUserFName(rs.getString(2));
            u.setUserLName(rs.getString(3));
            u.setUserEmail(rs.getString(4));
            u.setUserPassword(rs.getString(5));
            u.setUserCountry(rs.getString(6));
            u.setUserProvince(rs.getString(7));
            u.setUserCity(rs.getString(8));
            u.setUserZip(rs.getString(9));

            return u;
        });
    }
    public void setTemplate(JdbcTemplate template) {

    }
}

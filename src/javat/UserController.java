package javat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.SQLException;
import java.util.List;
@RequestMapping
@Controller
public class UserController {
    @Autowired
    Userdao dao;
    @GetMapping(path = "/user")
    public String showCategorypage(ModelMap model) throws ClassNotFoundException, SQLException{
        List<User> list = dao.display();
        model.addAttribute("userlist",list);
        model.put("id", list.get(0).getUserID());
        model.put("fname",list.get(0).getUserFName());
        model.put("lname",list.get(0).getUserLName());
        model.put("email",list.get(0).getUserEmail());
        model.put("password",list.get(0).getUserPassword());
        model.put("country",list.get(0).getUserCountry());
        model.put("province",list.get(0).getUserProvince());
        model.put("city",list.get(0).getUserCity());
        model.put("zip",list.get(0).getUserZip());

        return "user";
    }


    @GetMapping(path = "/")
    public String showCategorypage1(ModelMap model) throws ClassNotFoundException, SQLException{
        List<User> list = dao.display();
        model.addAttribute("userlist",list);
        model.put("id", list.get(0).getUserID());
        model.put("fname",list.get(0).getUserFName());
        model.put("lname",list.get(0).getUserLName());
        model.put("email",list.get(0).getUserEmail());
        model.put("password",list.get(0).getUserPassword());
        model.put("country",list.get(0).getUserCountry());
        model.put("province",list.get(0).getUserProvince());
        model.put("city",list.get(0).getUserCity());
        model.put("zip",list.get(0).getUserZip());
        return "user";
    }
}

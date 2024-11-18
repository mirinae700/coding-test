import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);
        int year = scan.nextInt();

        if (validate(year)) {
            System.out.println(checkLeapYear(year));
        }
    }

    public static boolean validate(int number) {
        return number >= 1 && number <= 4000;
    }

    public static int checkLeapYear(int year) {
        return year % 4 == 0 && (year % 100 > 0 || year % 400 == 0) ? 1 : 0;
    }
}
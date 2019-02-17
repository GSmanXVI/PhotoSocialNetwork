using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationJWT.Migrations.Application
{
    public partial class PostName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Content",
                table: "Posts",
                newName: "ImagePath");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "Posts",
                newName: "Content");
        }
    }
}
